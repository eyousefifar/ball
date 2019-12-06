import {baseUrl} from "../../ball-library/network";
import {DeleteRes, ReserveRes, ReservesPageRes,} from "./types";


export const getAllReserveList = async (token: string): Promise<ReservesPageRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/customers/reserveItemCards`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson : ReserveRes = await response.json();

        console.warn('ReservationList Response : ', responseJson.reserveItemCards);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    reserveRes: responseJson,
                    minTime: responseJson.fromNearestReserveItemTime,
                    message: 'تراکنش ها'
                };
            case 500:
                return {
                    state: 'failed',
                    reserveRes: {
                        fromNearestReserveItemTime:'00:00:00',
                        reserveItemCards:[]
                    },
                    minTime: '00:00:00',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    reserveRes: {
                        fromNearestReserveItemTime:'00:00:00',
                        reserveItemCards:[]
                    },
                    minTime: '00:00:00',
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString(),
            reserveRes: {
                fromNearestReserveItemTime:'00:00:00',
                reserveItemCards:[]
            },
            minTime: '00:00:00',
        }
    }
};


export const deleteReserve = async (token: string,sportSiteReserveItemUUID:string): Promise<DeleteRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/reserves/items/${sportSiteReserveItemUUID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        // let responseJson  = await response.json();

        console.warn('Delete Response : ', response.status);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'با موفقیت حذف شد'
                };
            case 400:
                let responseJson  = await response.json();
                return {
                    state:'failed',
                    message:responseJson.errs
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته'
                }
        }
    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString(),
        }
    }
};
