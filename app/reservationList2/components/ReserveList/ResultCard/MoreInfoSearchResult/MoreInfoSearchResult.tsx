import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
//local
import {reserveListStore} from '../../../../store/ReserveStore'
import {Icon} from "../../../../../ball-library";
// styles
import styleGenerator from './styles';
import moment from "moment-jalaali";

interface IListData {
	// row: number,
	// section: number,
	name:string,
	location:string,
	startTime:string,
	date:string

}


const MoreInfoSearchResult = (props: IListData) => {
	// const {row, section} = props;
	const {name,location,startTime,date} = props;
	// const items = reserveListStore.getReserveListFull[section].items[row];
	const persianDate = moment(date).format('jYYYY-jM-jD');
	// const persianDate = moment(date).locale('fa').format('jYYYY/jM/jD');;

	const styles = styleGenerator();

	return (
			<View style={styles.more_info_container}>
				<Text style={styles.card_name}>{name}</Text>
				<View style={styles.more_info_section}>

					{/*Address section*/}
					<View style={styles.address_section}>
						<Icon type={'simpleLine'} size={10} color={'#2d2d2d'} name={'location-pin'}/>
						<Text style={styles.address_section_text}>{location}</Text>
					</View>

				</View>

				{/*Price section*/}
				<View style={styles.price_section}>
					<Text style={styles.time_text}>{startTime}</Text>
					<Text style={styles.date_text}>{persianDate}</Text>
				</View>
			</View>

	);
};

export default observer(MoreInfoSearchResult);
