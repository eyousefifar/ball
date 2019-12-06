import {baseUrl} from "../../ball-library/network";
import {HomeRes} from "./types";


export const getHomeItems = async (): Promise<HomeRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.warn('END Before Parsing');
        let responseJson  = await response.json();

        // console.warn('Home Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    sportLists: responseJson.sportSites,
                    banners: responseJson.baners,
                    message: 'صفحه خانه'
                };
            case 500:
                return {
                    state: 'failed',
                    sportLists: [],
                    banners: [],
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: 'failed',
                    sportLists: [],
                    banners: [],
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            sportLists: [],
            banners: [],
            message: e.toString(),
        }
    }
};


