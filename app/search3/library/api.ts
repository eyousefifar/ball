import {baseUrl} from "../../ball-library/network";
import {SearchItem, SearchRes} from "./types";
import qs from "qs";

export const searchSportSites = async (searchText: string, gender: 'مرد' | 'زن', sportTypes: Array<string>): Promise<SearchRes> => {

    // console.warn('SearchText : ',searchText);
    // console.warn('Gender : ',gender);
    // console.warn('SportTypes : ',sportTypes);

    let filterQuery = '';

    if (sportTypes.length === 0) {
        if (searchText === '') {
            // console.warn('TYPE 1 CALLED')
            filterQuery = qs.stringify({
                odataStr: `$filter=genderTypes contains '${gender}'`
            });
        } else {
            // console.warn('TYPE 2 CALLED')

            filterQuery = qs.stringify({
                odataStr: `$filter=substringof('${searchText}', name) and genderTypes contains '${gender}'`
            });
        }
    } else {
        let items = sportTypes.join(',');
        if (searchText === '') {
            // console.warn('TYPE 3 CALLED')
            filterQuery = qs.stringify({
                odataStr: `$filter=genderTypes contains '${gender}' and sportTypes overlap '${items}'`
            });
        } else {
            // console.warn('TYPE 4 CALLED')
            filterQuery = qs.stringify({
                odataStr: `$filter=substringof('${searchText}', name) and genderTypes contains '${gender}' and sportTypes overlap '${items}'`
            });
        }
    }

    try {
        let response = await fetch(`${baseUrl}/api/sportSites?${filterQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let responseJson: Array<SearchItem> = await response.json();

        console.warn('SearchItems Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    searchResult: responseJson,
                    message: 'نتایج جستجو'
                };
            case 500:
                return {
                    state: 'failed',
                    searchResult: [],
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    searchResult: [],
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            searchResult: [],
            message: e.toString(),
        }
    }
};
