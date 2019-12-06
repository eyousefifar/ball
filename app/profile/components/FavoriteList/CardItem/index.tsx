import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import MoreInfoItem from "./MoreInfo";
import {showSportReserve} from "../../../library/nav";
import {Colors, Radius} from "../../../../ball-library/theme";

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
    const {image, sportId, address, discount, name, price, score} = props;

    const reserve = async () => {
        await showSportReserve(sportId)
    };

    return (
        <View style={styles.sport_parent_container}>
            <RectButton style={styles.sport_container} onPress={reserve}>
                <ImageBackground source={{uri: image}}
                                 style={{width: 80, height: 80, borderRadius: Radius.typeButton_4}}
                                 imageStyle={{borderRadius: Radius.typeButton_4}}>
                    {discount != 0 &&
                    <View style={styles.discount}>
                        <Text style={styles.discount_text}>{discount}%</Text>
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
