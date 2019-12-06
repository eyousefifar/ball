import React, {useEffect, useState} from 'react';
import {ScrollView, ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react';
// local
import {defaultTheme} from "../../ball-library/theme";
import {auth, Header, screens, ScrollHeaderPadding} from "../../ball-library";
import {dismissTransactionScreen, dismissWalletScreen} from "../library/nav";
import TransactionsList from "../components/TransactionsList";
import {Provider} from "react-native-paper";
import FilterSection from "../components/FilterSection";
import {Transaction} from "../library/types";
import {getAllTransactions} from "../library/api";
import Loading from "../../ball-library/Loading";
import {walletStore} from "../store/WalletStore";

interface ITransactions {
    walletId: string
}

const Transactions = (props: ITransactions) => {

    // const styles = styleGenerator();
    const {walletId} = props;

    const firstLaunch = async () => {
        await walletStore.setWalletId(walletId);
        await walletStore.getAllTransactions();
    };


    useEffect(() => {
        firstLaunch()
    }, []);



    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={walletStore.loading} screenId={screens.walletTransactions.id}>
                <View style={{flex: 1}}>
                    <Header
                        title={'تراکنش ها'}
                        mode={'fullWidth'}
                        drawBehind
                        onPress={dismissTransactionScreen}
                    />
                    <ScrollView style={{flex: 1, paddingHorizontal: 16}}>
                        <ScrollHeaderPadding/>
                        <FilterSection/>
                        {/*<TitleBar title={'12 خرداد'} fontStyle={'thin'}/>*/}
                        {/*<TransactionsList transactions={walletStore.getFakeTransactions} style={{width:'100%',marginTop:8}}/>*/}
                        {/*<TitleBar title={'8 دی'} fontStyle={'thin'}/>*/}
                        <TransactionsList transactions={walletStore.getTransactions} style={{width: '100%', marginTop: 8}}/>
                    </ScrollView>
                </View>
            </Loading>
        </Provider>


    );
};

export default observer(Transactions);
