import React from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {RectButton} from "react-native-gesture-handler";
import {ReserveItemServer} from "../../store/types";
import {reserveSanses} from "../../library/api";
import {auth} from "../../../ball-library";

interface IFinalPrice {
    finalPrice: number,
    finalDiscount: number,
    finalReserveItems: Array<ReserveItemServer>,
    sportId:string
}

const FinalPrice = (props: IFinalPrice) => {

    const styles = styleGenerator();
    const {finalPrice, finalDiscount, finalReserveItems, sportId} = props;

    console.warn(finalReserveItems);

	const handleReserve = async () => {
	    let resReserve = await reserveSanses(auth.getToken(),finalReserveItems,sportId);

        if(resReserve.state === "success"){
            ToastAndroid.show('با موفقیت رزرو شد',ToastAndroid.SHORT)
        }else {
            ToastAndroid.show('خطایی هنوز وجود دارد',ToastAndroid.SHORT)
        }
	};

    return (
        <View style={styles.price_section}>

            <View style={styles.final_price_section}>
                <Text style={styles.final_price}>{finalPrice} <Text style={{fontSize: 12}}>تومان</Text></Text>
                <Text style={styles.final_discount}>سود شما : {finalDiscount}</Text>
            </View>

            <RectButton style={styles.submit_button} onPress={handleReserve}>
                <Text style={styles.submit_button_text}>پرداخت</Text>
            </RectButton>

        </View>
    );
};

export default observer(FinalPrice);
