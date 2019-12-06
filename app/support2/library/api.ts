import {baseUrl} from "../../ball-library/network";
import {Ticket, TicketList} from "./types";
import {SearchItem, SearchRes} from "../../search3/library/types";
import qs from "qs";

export const getTicketList = async (token: string,searchText:string): Promise<TicketList> => {

    let filterQuery = qs.stringify({
        odataStr: `$filter=substringof('${searchText}', name)`
    });


    try {
        let response = await fetch(`${baseUrl}/api/users/customers/supportTickets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson: Array<Ticket> = await response.json();

        console.warn('TicketList Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    ticketList: responseJson,
                    message: 'تیکت ها'
                };
            case 500:
                return {
                    state: 'failed',
                    ticketList: [],
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    ticketList: [],
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
            ticketList: []
        }
    }
};
