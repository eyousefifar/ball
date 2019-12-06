import React, {useEffect} from 'react';
import {View, Text, ListRenderItem} from 'react-native'
import {observer} from 'mobx-react';
import {FlatList} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
import {Colors} from "../../../ball-library/theme";
import {ISelectedReserves} from "../../store/types";

interface IReservedList {
	reserved_items: Array<any>,
}

const ReservedList = (props: IReservedList) => {

	const styles = styleGenerator();
	const {reserved_items} = props;


	const renderReserveText = ({item} : {item:any} ) => {
		return(
				<View style={{flexDirection: 'row-reverse'}}>
					<Text style={[styles.price, {fontSize:12}]}> X 5</Text>
					<Text style={[styles.price, {fontSize:12}]}>بزرگسالان</Text>
				</View>
		)
	};



	const renderReservedItem: ListRenderItem<any> = ({item}) => {
		return (
				<View style={styles.ticket_container}>
					<View style={{flex:1,/*backgroundColor:'rgba(182,28,134,0.45)'*/}}>
						<Text style={[styles.price, {fontSize: 14, color: Colors.greenBall}]}>{item.amount * item.price} ریال</Text>
					{/*	<FlatList
								data={[0,1,2,3,5]}
								renderItem={renderReserveText}
								keyExtractor={(value,index) => index.toString()}/>*/}
						<View style={{flexDirection: 'row-reverse'}}>
							<Text style={[styles.price, {fontSize:12}]}> X {item.amount}</Text>
							<Text style={[styles.price, {fontSize:12}]}>{item.name}</Text>
						</View>
					</View>


					<View style={{flex:1,/*backgroundColor:'rgba(72,139,237,0.55)',*/alignItems:'flex-start'}}>
						<Text style={styles.price}>سه شنبه</Text>
						<Text style={styles.price}>{item.date}</Text>
						<Text style={styles.price}>{item.startTime} - {item.endTime}</Text>
					</View>

				</View>
		)
	};

	return (
			<FlatList data={reserved_items} style={{width: '100%', marginBottom: 50}} renderItem={renderReservedItem}
			          keyExtractor={(value, index) => index.toString()}/>
	);
};

export default observer(ReservedList);

/*
<View style={styles.row_item}>
	<Text style={[styles.price, {fontSize: 14, color: Colors.greenBall}]}>32500 ریال</Text>
	<Text style={styles.day}>سه شنبه</Text>
</View>

{/!*region ReserveItems*!/}
<View style={styles.row_item}>
  <View style={{flexDirection: 'row-reverse'}}>
    <Text style={styles.price}> X 5</Text>
    <Text style={styles.price}>بزرگسالان</Text>
  </View>
  <Text style={styles.day}>1398/4/22</Text>
</View>

<View style={styles.row_item}>
		<View style={{flexDirection: 'row-reverse'}}>
<Text style={styles.price}> X 5</Text>
<Text style={styles.price}>بزرگسالان</Text>
		</View>
		<Text style={styles.day}>18:30 - 23:00</Text>
</View>
{/!*	endregion*!/}
*/
