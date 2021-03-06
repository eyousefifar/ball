import React from 'react';
import {ImageBackground, ImageSourcePropType, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import MoreInfoItem from "./MoreInfo";
import {showSportReserve} from "../../../library/nav";
import {Colors} from "../../../../ball-library/theme";

interface CardItem {
	sportId: string,
    name: string,
    image: string,
    address: string,
    score: number,
    price: number,
    discount?: number | null,
}

const CardItem = (props: CardItem) => {

    const styles = styleGenerator();
    const {sportId, name, image, address, score, price, discount} = props;
    const finalDiscount = (discount === undefined) ?  0 : discount;

    const reserve = async () => {
        await showSportReserve('fce21e8f-dfa1-41bd-9722-635dc2a04c63');
        // await showSportReserve(sportId)
    };

    return (
        <View style={styles.sport_parent_container}>
            <RectButton style={styles.sport_container} onPress={reserve}>
                <ImageBackground source={require('../../../assets/sports/8.jpg')} style={styles.card_image}
                                 imageStyle={styles.image_card_style}>
                    {finalDiscount != 0 &&
                    <View style={styles.discount}>
                        <Text style={styles.discount_text}>{finalDiscount}%</Text>
                    </View>
                    }
                </ImageBackground>

                <Text numberOfLines={1} style={styles.header_item}>{name}</Text>

                <MoreInfoItem name={address} iconName={'location-pin'} icon_type={'simpleLine'}/>
                <MoreInfoItem name={score} iconName={'md-star'} icon_type={"ion"}/>
                <MoreInfoItem name={price} iconName={'md-cash'} color={Colors.greenBall} text_color={Colors.greenBall}
                              icon_type={'ion'}/>
            </RectButton>
        </View>
    );
};

export default observer(CardItem);
