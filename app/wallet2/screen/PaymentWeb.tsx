import React from "react";
import {View, Text, WebView} from 'react-native'
// import styleGenerator from './styles';

import {observer} from "mobx-react";


interface IPaymentWeb {
    paymentUrl:string
}

const PaymentWeb = (props:IPaymentWeb) => {

    const {paymentUrl} = props;

    return (
        <WebView
            source={{uri: paymentUrl}}
            // source={{uri: 'https://www.github.com/'}}
            style={{flex:1}}
        />
    )
};


export default observer(PaymentWeb);