import {action, computed, decorate, observable} from "mobx";
import orderBy from 'lodash/orderBy'
import {getSanes} from "../library/api";
import {ToastAndroid} from "react-native";
import {SansList} from "../library/types";
import moment from "moment-jalaali";


class SportReservationStore {
    selectedReserves: any = {};

    finalReserve: any = {};

    finalPrice: number = 0;
    finalDiscount: number = 0;

    sportId:string = '';
    monthIndex:number = 0;
    dayIndex:number = 0;
    loading:boolean= false;
    sansesList:Array<SansList> = [];

    gender: 'مرد' | 'زن' = 'مرد';

    constructor(){
        // TODO => get now from server
        this.dayIndex = moment().jDate() - 1;
        this.monthIndex = moment().jMonth();
    }

    //functions
    get totalAmount() {
        return this.finalPrice
    }
    get getTotalDiscount(): number {
        return this.finalDiscount
    }
    get getFinalReserve() {
        return this.finalReserve
    }

    //computed
    get isEmptyReserve () : boolean {
        return this.sansesList.length === 0
    }

    //action
    setSportId = (sportId:string) => {
        this.sportId = sportId
    };
    setMonthIndex = (monthIndex:number) => {
        this.monthIndex = monthIndex
    };
    setDayIndex = (dayIndex:number) => {
        this.dayIndex = dayIndex
    };
    setGenderState = (state:'زن'|'مرد') => {
        this.gender = state
    };

    getAllReserveList = async () => {
        this.sansesList = [];
        let res = await getSanes(this.sportId,this.monthIndex,this.dayIndex,this.gender);

        if (res.state === 'success') {
            this.sansesList = res.sanses;
            console.warn('Response : ', res.sanses);
            this.loading = true

        } else {
            ToastAndroid.show(res.m, ToastAndroid.SHORT);
            this.loading = true
        }
    };


    addReserve = async (uuid: string, amount: number, price: number, discount: number, name: string, date: string, startTime: string, endTime: string) => {
        if (this.selectedReserves[uuid]) {
            this.finalPrice -= this.selectedReserves[uuid].amount * price;
            this.finalDiscount -= this.selectedReserves[uuid].amount * discount;

            this.selectedReserves[uuid].amount = amount;

            this.finalPrice += amount * price;
            this.finalDiscount += amount * discount;
        } else {
            this.finalPrice += amount * price;
            this.finalDiscount += amount * discount;
            this.selectedReserves[uuid] = {uuid, amount, price, discount, name, date, startTime, endTime}
        }
        this.finalReserve = orderBy(Object.values(this.selectedReserves), ['date', 'startTime'], ['asc']);
    };
    removeReserve = (uuid: string) => {
        this.finalPrice -= this.selectedReserves[uuid].amount * this.selectedReserves[uuid].price;
        this.finalDiscount -= this.selectedReserves[uuid].amount * this.selectedReserves[uuid].discount;

        delete this.selectedReserves[uuid];

        this.finalReserve = this.selectedReserves;

        // console.warn(this.finalReserve)
    };
    reset = () => {
        this.selectedReserves = {};
        this.finalReserve = {};
        this.finalPrice = 0;
        this.finalDiscount = 0;
        this.sansesList = []
    };
}

decorate(SportReservationStore, {
    // observables
    selectedReserves:observable,
    finalPrice: observable,
    finalDiscount: observable,

    sportId:observable,
    monthIndex:observable,
    dayIndex:observable,
    loading:observable,
    sansesList:observable,
    gender : observable,


    // computed
    isEmptyReserve:computed,

    // actions
    addReserve: action,
    removeReserve: action,
    reset: action,

    setSportId:action,
    setMonthIndex:action,
    setDayIndex:action,
    setGenderState:action,

    getAllReserveList:action,

});

export const sportReservationStore = new SportReservationStore();
