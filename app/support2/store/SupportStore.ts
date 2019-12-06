import {action, observable, computed, decorate} from 'mobx';
import {Ticket} from "../library/types";
import {getTicketList} from "../library/api";
import {auth} from "../../ball-library";
import {ToastAndroid} from "react-native";


class SupportStore {
    // observables
    ticketList: Array<Ticket> = [];
    loading: boolean = false;
    query: string = '';


    // functions
    get getTicketList(): Array<Ticket> {
        return this.ticketList
    }

    // computed
    get isTicketListEmpty(): boolean {
        return this.ticketList.length === 0
    }


    // actions
    setQuery = (text: string) => {
        this.query = text;
    };

    getAllData = async () => {
        this.ticketList = [];

        let res = await getTicketList(auth.getToken(), this.query);

        if (res.state === 'success') {
            this.ticketList = res.ticketList;
            this.loading = true
        } else {
            ToastAndroid.show(res.message, ToastAndroid.SHORT);
            this.loading = true
        }
    };

}

decorate(SupportStore, {
    // observables
    ticketList: observable,
    loading: observable,
    query: observable,

    // computed
    isTicketListEmpty: computed,

    // actions
    getAllData: action,
    setQuery: action,
});

export const supportListStore = new SupportStore();
