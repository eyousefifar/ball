import {observable, computed, decorate, action} from 'mobx';
import {IReserveList} from "./types";
import {getAllReserveList} from "../library/api";
import {auth} from "../../ball-library";
import {ToastAndroid} from "react-native";
import {useState} from "react";
import {ReserveItem} from "../library/types";

class ReserveStore {
    // observables
    reserveList: Array<ReserveItem> = [];
    minimumTime: string = '';
    loading: boolean = false;

    // computed
    get getReserveListEmpty(): boolean {
        return this.reserveList.length === 0;
    };


    // actions
    getAllData = async () => {
        this.reserveList = [];
        this.loading = false;
        this.minimumTime = '';


        let reserveListRes = await getAllReserveList(auth.getToken());

        if (reserveListRes.state === 'success') {
            if (reserveListRes.reserveRes.reserveItemCards.length === 0) {
                this.reserveList = [];
                this.minimumTime = '00:00:00'
            }else {
                this.reserveList = reserveListRes.reserveRes.reserveItemCards;

                if (reserveListRes.reserveRes.fromNearestReserveItemTime !== undefined)
                    this.minimumTime = reserveListRes.reserveRes.fromNearestReserveItemTime;
                else
                    this.minimumTime = '00:00:00'

            }


            this.loading = true;
        } else {
            ToastAndroid.show(reserveListRes.message, ToastAndroid.SHORT);
            this.loading = true;
        }
    };

    resetReserveList = () => {
        this.loading = false
    }

}

decorate(ReserveStore, {
    // observables
	reserveList: observable,
	minimumTime: observable,
	loading: observable,

	// computed
	getReserveListEmpty:computed,

	// actions
	getAllData:action,
    resetReserveList:action,
});

export const reserveListStore = new ReserveStore();
