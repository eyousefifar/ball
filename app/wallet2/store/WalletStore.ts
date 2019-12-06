import {action, observable, computed, decorate} from 'mobx';
import {Transaction} from "../library/types";
import moment from "moment-jalaali";
import {getAllTransactions} from "../library/api";
import {auth} from "../../ball-library";
import {ToastAndroid} from "react-native";

class WalletStore {
	// observables
	walletId:string = '';
	monthIndex:number = 0;
	dayIndex:number = 0;
	loading:boolean= false;
	transactions : Array<Transaction> = [];


	constructor(){
		// TODO => get now from server
		this.dayIndex = moment().jDate() - 1;
		this.monthIndex = moment().jMonth();
	}

	// functions
	get getTransactions(): Array<Transaction> {
		return this.transactions
	}


	// computed
	get isEmptyTransactions () : boolean {
		return this.transactions.length === 0
	}


	//action
	setWalletId = (walletId:string) => {
		this.walletId = walletId
	};
	setMonthIndex = (monthIndex:number) => {
		this.monthIndex = monthIndex
	};
	setDayIndex = (dayIndex:number) => {
		this.dayIndex = dayIndex
	};

	getAllTransactions = async () => {
		let transRes = await getAllTransactions(auth.getToken(), this.walletId,this.monthIndex,this.dayIndex);

		if (transRes.state === 'success') {
			this.transactions = transRes.transactions;

			this.loading = true;
		}else {
			this.loading = true;

			ToastAndroid.show(transRes.message,ToastAndroid.SHORT)
		}
	};

}

decorate(WalletStore, {
	// observables
	walletId:observable,
	monthIndex:observable,
	dayIndex:observable,
	loading:observable,
	transactions:observable,

	// computed
	isEmptyTransactions:computed,

	// actions
	setWalletId:action,
	setMonthIndex:action,
	setDayIndex:action,
	getAllTransactions:action,
});

export const walletStore = new WalletStore();
