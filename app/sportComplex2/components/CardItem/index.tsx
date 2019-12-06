import React from 'react';
import {ImageBackground, ImageSourcePropType, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import MoreInfoItem from "./MoreInfo";
import {pushSport} from "../../library/nav";
import {Colors} from "../../../ball-library/theme";
// import {showSportReserve} from "../../../library/nav";

interface CardItem {
	id: number,
	name: string,
	image: ImageSourcePropType,
	address: string,
	score: number,
	price: number,
	discount?: number | null,
}

const CardItem = (props: CardItem) => {

	const styles = styleGenerator();
	const {id, name, image, address, score, price, discount} = props;


	return (
			<View style={styles.sport_parent_container}>
				<RectButton style={styles.sport_container} onPress={pushSport}>
					<ImageBackground source={image} style={{width: 90, height: 90, borderRadius: 8}}
					                 imageStyle={{borderRadius: 8}}>
						{discount != null &&
            <View style={styles.discount}>
              <Text style={styles.discount_text}>{discount}%</Text>
            </View>
						}
					</ImageBackground>

					<Text style={styles.header_item}>{name}</Text>

					<MoreInfoItem name={address} iconName={'location-pin'} icon_type={'simpleLine'}/>
					<MoreInfoItem name={score} iconName={'md-star'} icon_type={"ion"}/>
					<MoreInfoItem name={price} iconName={'md-cash'} color={Colors.greenBall} text_color={Colors.greenBall}
					              icon_type={'ion'}/>
				</RectButton>
			</View>
	);
};

export default observer(CardItem);
