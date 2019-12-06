import React from 'react';
import {ListRenderItem, ScrollView, Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {IReserveCard} from "../../../store/types";
import {FlatList} from "react-native-gesture-handler";
import ReserveItem from "./ReserveItem";
import {Sans} from "../../../library/types";


interface IReservationList {
	startTime:string,
	endTime:string,
	sanses:Array<Sans>
}

const ReserveListItem = (props: IReservationList) => {

	const styles = styleGenerator();
	const {startTime,endTime,sanses} = props;

	/*const renderReserveItem : ListRenderItem<IReserveCard> = ({item}) => {
		return (
				<ReserveItem discount={item.discount} price={item.price}
				             limit={item.limit} reserveId={item.reserveId} time={timestamp}
				             reserveTitle={item.reserveTitle} reserveType={item.reserveType}/>
		)
	};*/

	return (
			<View style={styles.reserve_container}>
				<View style={styles.reserve_title_box}>
					<Text style={styles.header_time}>{startTime}</Text>
					<Text style={styles.header_time}>الی</Text>
					<Text style={styles.header_time}>{endTime}</Text>
				</View>
				{/*TODO => Add Date Later*/}
				<ScrollView style={styles.reserve_list} horizontal={true} showsHorizontalScrollIndicator={false}>
					{
						sanses.map((data, index) => {
							let reserveType = data.capacity === 1 ? "single" : "multi";
							return (
									<ReserveItem discount={data.discountPrecent} price={data.price} key={index}
									             limit={data.reserveLimit} reserveId={data.uuid} time={{startsAt:startTime,endsAt:endTime}}
									             reserveTitle={data.sportType} reserveType={reserveType} date={data.date}/>
							);
						})
					}
				</ScrollView>

			</View>
	);
};

export default observer(ReserveListItem);


{/*
<FlatList data={data} renderItem={renderReserveItem}
          keyExtractor={(value, index) => index.toString()}
          horizontal={true} inverted={true} style={styles.reserve_list}
          showsHorizontalScrollIndicator={false} />*/}
