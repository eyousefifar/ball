import {baseUrl} from "../../ball-library/network";
import {IncreaseCashRes, Transaction, TransactionRes, WalletPage, WalletRes} from "./types";
import moment from "moment-jalaali";
import qs from "qs";


export const getWalletCustomer = async (token: string): Promise<WalletRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/customers/wallets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson: WalletPage = await response.json();

        // console.warn('WalletPage Response : ', responseJson);


        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    walletRes: responseJson,
                    message: 'تراکنش ها'
                };
            case 500:
                return {
                    state: 'failed',
                    walletRes: 'Nothing',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    walletRes: 'Nothing',
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString(),
            walletRes: 'Nothing'
        }
    }
};

export const increaseWalletAmount = async (token: string, amount: number): Promise<IncreaseCashRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/customers/wallets/amount/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                amount: amount
            }),
        });
        let responseJson = await response.json();

        console.warn(responseJson);


        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    link: responseJson.paymentLink,
                    message: 'در حال اتصال به درگاه پرداخت'
                };
            case 500:
                return {
                    state: 'failed',
                    link: '',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    link: '',
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            link: '',
            message: e.toString()
        }
    }
};

export const getAllTransactions = async (token: string, walletId:string, monthIndex: number, dayIndex: number): Promise<TransactionRes> => {

    // TODO => is not working out of 1398 !!
    let persianDate = `1398/${monthIndex + 1}/${dayIndex + 1}`;
    let normalDate = moment(persianDate, 'jYYYY/jM/jD').format('YYYY-M-D');

    let filterQuery = qs.stringify({
        odataStr:`$filter=createdAt le '${normalDate}'&$orderby=createdAt desc`
    });
    // TODO => test server for correct response

    console.log('URL :',`${baseUrl}/api/users/customers/wallets/${walletId}/transactions?${filterQuery}`)

    try {
        // let response = await fetch(`${baseUrl}/api/users/customers/wallets/${walletId}/transactions`, {
        let response = await fetch(`${baseUrl}/api/users/customers/wallets/${walletId}/transactions?${filterQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson : Array<Transaction> = await response.json();

        console.warn('TransactionPage Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    transactions: responseJson,
                    message: 'تراکنش ها'
                };
            case 500:
                return {
                    state: 'failed',
                    transactions: [],
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    transactions: [],
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString(),
            transactions: []
        }
    }
};

