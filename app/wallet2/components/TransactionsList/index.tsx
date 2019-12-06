import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import TransactionItem from './TransactionItem'
import {Transaction} from "../../library/types";
import moment from "moment-jalaali";


interface ITransactionsList {
    transactions: Array<Transaction>,
    style: any
}

interface TimeDate {
    time:string,
    date:string
}

const TransactionsList = (props: ITransactionsList) => {

    const styles = styleGenerator();
    const {transactions, style} = props;

    // TODO => Change Date to ShamsiDate
    const getDateAndTime = (timeStamp:any) : TimeDate=> {
        let a = new Date(timeStamp);

        let hours = a.getHours();
        let minutes = "0" + a.getMinutes();
        let seconds = "0" + a.getSeconds();
        let time = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        let persianDate = moment(a).format('jYYYY/jM/jD'); // 1367/11/4


        return {
            date:persianDate,
            time:time
        }
    };




    const renderTransaction: ListRenderItem<Transaction> = ({item}) => {
        let dateTime = getDateAndTime(item.createdAt);

        return (
            <TransactionItem price={item.amount} paymentType={item.transactionType}
                             payedFor={item.description} time={dateTime.time}
                             date={dateTime.date}/>
        )
    };

    return (
        <FlatList
            data={transactions}
            keyExtractor={(value, index) => index.toString()}
            renderItem={renderTransaction}
            style={style}
        />
    );
};

export default observer(TransactionsList);
