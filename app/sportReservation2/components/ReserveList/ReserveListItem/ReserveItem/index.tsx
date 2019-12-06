import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {RectButton} from "react-native-gesture-handler";
import {sportReservationStore} from "../../../../store/SportReservationStore";
import {Colors} from "../../../../../ball-library/theme";
import uuid from "uuid";

interface IReserveCardItem {
    time: {
        startsAt: string,
        endsAt: string
    },
    reserveId: string;
    reserveType: string;
    reserveTitle: string;
    price: number;
    discount: number;
    limit: number;
    date: string
}


const ReserveItem = (props: IReserveCardItem) => {


    const styles = styleGenerator();

    const {limit, price, reserveId, reserveTitle, reserveType, time, date} = props;
    let {discount} = props;

    if (discount === null) {
        discount = 0
    }

    const finalPrice = price - (price * discount / 100);
    const finalDiscount = price * discount / 100;
    // TODO => Validate Discount Expire Date


    const [isSelected, toggleSelection] = useState(false);
    const [reserveCount, setCount] = useState<number>(0);

    useEffect( () => {
        if (Object.values(sportReservationStore.selectedReserves).length != 0){
            let item = sportReservationStore.selectedReserves[reserveId];
            if (item != undefined){
                let itemAmount = sportReservationStore.selectedReserves[reserveId].amount;
                setCount(itemAmount);
            }
        }
    });



    const handleSingleButtonSelection = () => {
        if (isSelected) {
            handleDecreaseReserveCount();
        } else {
            handleIncreaseReserveCount();
        }
        toggleSelection(!isSelected)
    };

    const handleIncreaseReserveCount = () => {
        if (reserveCount <= limit) {
            sportReservationStore.addReserve(reserveId, reserveCount + 1, finalPrice, finalDiscount, reserveTitle, date, time.startsAt, time.endsAt);
            setCount(reserveCount + 1);
        }
    };
    const handleDecreaseReserveCount = () => {
        if (reserveCount > 0) {
            if (reserveCount === 1) {
                sportReservationStore.removeReserve(reserveId);
                setCount(reserveCount - 1);
            } else {
                sportReservationStore.addReserve(reserveId, reserveCount - 1, finalPrice, finalDiscount, reserveTitle, date, time.startsAt, time.endsAt);
                setCount(reserveCount - 1);
            }
        }
    };

    const renderReserveButton = () => {
        if (reserveType === "single") {
            return (
                <View
                    style={[styles.reserve_button_single_container, isSelected && styles.reserve_button_single_container_selected]}>
                    <RectButton style={styles.reserve_button_single} onPress={handleSingleButtonSelection}>
                        <Text
                            style={[styles.reserve_button_single_text, isSelected && styles.reserve_button_single_text_selected]}>
                            {isSelected ? 'رزرو شد' : 'رزرو کردن'}
                        </Text>
                    </RectButton>
                </View>
            )
        } else {
            return (
                <View style={styles.multi_reserve_button_container}>

                    {reserveCount != limit &&
                    <RectButton style={styles.sign_button_container} onPress={handleIncreaseReserveCount}>
                        <View style={[styles.plus_sign_hor, {backgroundColor: '#fff'}]}/>
                        <View style={[styles.plus_sign_ver, {backgroundColor: '#fff'}]}/>
                    </RectButton>
                    }

                    {reserveCount === limit &&
                    <RectButton style={[styles.sign_button_container, {backgroundColor: Colors.grayBall}]}
                                enabled={false}>
                        <View style={[styles.plus_sign_hor, {backgroundColor: '#fff'}]}/>
                        <View style={[styles.plus_sign_ver, {backgroundColor: '#fff'}]}/>
                    </RectButton>
                    }


                    <Text style={styles.reserve_count}>{reserveCount}</Text>

                    {reserveCount != 0 &&
                    <RectButton style={styles.sign_button_container} onPress={handleDecreaseReserveCount}>
                        <View style={styles.minus_sign}/>
                    </RectButton>
                    }

                    {reserveCount === 0 &&
                    <RectButton style={[styles.sign_button_container, {backgroundColor: Colors.grayBall}]}
                                enabled={false}>
                        <View style={[styles.minus_sign, {backgroundColor: '#fff'}]}/>
                    </RectButton>
                    }


                </View>
            )
        }
    };

    const getDiscountedPrice = (): number => {
        return price - (price * discount / 100)
    };

    const renderDiscount = () => {
        if (discount != 0) {
            return (
                <View style={styles.discount_container}>
                    <Text style={styles.discount_text}>{discount}%</Text>
                </View>
            )
        } else {
            return null
        }
    };

    return (
        <View style={styles.container}>
            {renderDiscount()}
            <Text style={styles.reserve_text}>{reserveTitle}</Text>
            <View style={{alignItems: 'center',}}>
                <Text style={styles.reserve_price}>
                    {getDiscountedPrice()}<Text style={[styles.reserve_price, {fontSize: 10}]}>تومان</Text>
                </Text>
                {discount != 0 && <Text style={styles.reserve_without_discount}>{price}</Text>}
            </View>
            {renderReserveButton()}
        </View>
    );
};

export default observer(ReserveItem);
