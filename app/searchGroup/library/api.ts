import {baseUrl} from "../../ball-library/network";
import {SportGroupRes} from "./types";

export const getSportGroup = async (query:string): Promise<SportGroupRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites?${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let responseJson  = await response.json();

        console.warn('SearchGroup Response : ', responseJson);


        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    sportLists: responseJson,
                    message: 'صفحه ورزش های دسته ای'
                };
            case 500:
                return {
                    state: 'failed',
                    sportLists: [],
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: 'failed',
                    sportLists: [],
                    message: 'خطای ناشناخته'
                }
        }
    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            sportLists: [],
            message: e.toString(),
        }
    }
};
