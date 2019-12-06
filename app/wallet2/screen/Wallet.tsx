import React, {useEffect, useState} from 'react';
import {View, ScrollView, ToastAndroid, Linking} from 'react-native';
import {Provider} from 'react-native-paper';
import {observer} from 'mobx-react';
// local
import {dismissWalletScreen} from '../library/nav';
import {auth, defaultTheme, Header, screens, ScrollHeaderPadding} from '../../ball-library';
import IncreaseCard from "../components/IncreaseCard";
import TitleBar from "../components/FilterSection/TitleBar";
import ShowAllButton from "../components/ShowAllButton";
import TransactionsList from "../components/TransactionsList";
import {walletStore} from '../store/WalletStore'
import {getWalletCustomer} from "../library/api";
import {Transaction} from "../library/types";
import Loading from "../../ball-library/Loading";


const Wallet = () => {

    const [transactions, setTransactions] = useState<Array<Transaction>>([]);
    const [amount, setAmount] = useState<number>(0);
    const [activeDiscount, setActiveDiscount] = useState<number>(0);
    const [emptyTransactions, setEmptyTransactions] = useState<boolean>(false);
    const [walletId, setWalletId] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    const getCustomerWallet = async () => {
        let res = await getWalletCustomer(auth.getToken());

        if (res.state === 'success') {
            if (res.walletRes.walletTransactions.length === 0) {
                setEmptyTransactions(true)
            }

            setTransactions(res.walletRes.walletTransactions);
            setAmount(res.walletRes.amount);
            setActiveDiscount(res.walletRes.activeDiscount);
            setWalletId(res.walletRes.uuid);

            // console.warn('Transactions : ', res.walletRes);

            setLoading(true)
        } else {
            ToastAndroid.show(res.message, 1000)
        }
    };

    useEffect(() => {
        getCustomerWallet()
    }, []);

    // console.warn('Loading : ', loading)
    // console.warn('walletId : ',walletId);


    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={loading} screenId={screens.wallet.id}>
                <View style={{flex: 1}}>
                    <Header
                        title={'کیف پول'}
                        mode={'fullWidth'}
                        drawBehind
                        onPress={dismissWalletScreen}
                    />
                    <View style={{flex: 1}}>
                        <ScrollView style={{flex: 1, paddingHorizontal: 16}}>
                            <ScrollHeaderPadding/>
                            <IncreaseCard amount={amount} activeDiscount={activeDiscount}/>
                            <TitleBar title={'تراکنش های اخیر'} fontStyle={'thin'}/>
                            <TransactionsList transactions={transactions}
                                              style={{width: '100%', marginTop: 8, marginBottom: 50}}/>
                        </ScrollView>
                        <ShowAllButton walletId={walletId}/>
                    </View>
                </View>
            </Loading>
        </Provider>
    );

};

export default observer(Wallet);
