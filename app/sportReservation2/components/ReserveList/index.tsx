import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {observer} from 'mobx-react';
// import {SpringScrollView} from 'react-native-spring-scrollview'
// styles
import styleGenerator from './styles';
// local
import ReserveListItem from "./ReserveListItem";
import {SansList} from "../../library/types";


interface IReserveList {
	reserveList: Array<SansList>,
	isEmpty: boolean
}

const ReserveList = (props: IReserveList) => {

	const styles = styleGenerator();
	const {reserveList, isEmpty} = props;

	/*const renderReserveList: ListRenderItem<ReservationList> = ({item}) => {
		return (
				<ReserveListItem data={item.data} timestamp={item.timestamp}/>
		)
	};*/

	if (isEmpty) {
		return (
				<View style={styles.empty_box}>
					<Text style={styles.empty_box_text}>موردی یافت نشد !</Text>
				</View>
		)
	} else {
		return (
				<ScrollView style={{marginBottom:50}} bounces={false}>
					{
						reserveList.map((data, index) => {
							return (
									<View key={index} style={styles.reserve_list}>

										<ReserveListItem startTime={data.startTime} endTime={data.endTime} sanses={data.sessions}/>

									</View>
							);
						})
					}
				</ScrollView>
		)
	}
};

export default observer(ReserveList);


{/*
<FlatList data={reserveList} renderItem={renderReserveList} style={styles.reserve_list}
          contentContainerStyle={styles.reserve_list_content}
          keyExtractor={(value, index) => index.toString()}/>*/}
