import React from 'react';
import {View, ScrollView} from 'react-native';
import {observer} from 'mobx-react';
import {Provider} from "react-native-paper";
// styles
import styleGenerator from './styles';
//local
import {defaultTheme} from "../../ball-library/theme";
import {dismissModal, Header} from "../../ball-library";
import ReservedList from '../components/ReservedList'
import FinalPrice from '../components/FinalPrice'
import {popFinalReserveScreen} from "../library/nav";
import {ISelectedReserves, ReserveItemServer} from "../store/types";

interface IFinalReserve {
	finalPrice: number,
	finalDiscount: number,
	reservedItems: any,
	requestItems:Array<ReserveItemServer>
	sportId:string
}

const FinalReserve = (props: IFinalReserve) => {

	const styles = styleGenerator();
	const {finalDiscount, finalPrice, reservedItems,requestItems,sportId} = props;
	console.warn(requestItems);

	return (
			<Provider theme={defaultTheme}>
				<View style={{flex: 1}}>
					<Header
							title={'استخر'}
							drawBehind={false}
							mode={'fullWidth'}
							onPress={popFinalReserveScreen}/>
					<View style={{flex: 1}}>
						<ScrollView style={{paddingHorizontal: 16}}>
							<ReservedList reserved_items={reservedItems}/>
						</ScrollView>
						<FinalPrice finalDiscount={finalDiscount} finalPrice={finalPrice}
									finalReserveItems={requestItems} sportId={sportId}/>
					</View>
				</View>
			</Provider>
	);
};

export default observer(FinalReserve);
