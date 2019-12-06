import {baseUrl} from "../../ball-library/network";
import {ReserveItemServer} from "../store/types";

export interface IReserveResponse {
    state: 'success' | 'failed',
    message: string
}

export const reserveSanses = async (token: string, reservedItems: Array<ReserveItemServer>, sportId: string): Promise<IReserveResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/reserves/paymentType/wallet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                sportSiteReserveObj: {
                    sportSiteUUID:sportId
                },
                sportSiteReserveItemObjs: reservedItems
            }),
        });

        let responseJson = await response.json();

        console.warn(`Status : ${response.status}`,responseJson);

        switch (response.status) {
            case 201:
                return {
                    state: 'success',
                    message: 'با موفقیت رزرو انجام شد'
                };
            case 400:
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 404:
                return {
                    state:'failed',
                    message: responseJson.errs
                };
            case 500:
                return {
                    state:'failed',
                    message:'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state:'failed',
                    message:'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString()
        }
    }
};
