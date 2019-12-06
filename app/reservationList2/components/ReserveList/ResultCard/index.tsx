import React from 'react';
import {Image, Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import ReserveButton from './ReserveButton'
import MoreInfoSearchResult from "./MoreInfoSearchResult/MoreInfoSearchResult";

interface IListData {
	name:string,
	location:string,
	startTime:string,
	date:string,

	code:string,
	reserveId:string,

	// row: number,
	// section: number,
}

const ReserveListItem = (props: IListData) => {
	const styles = styleGenerator();
	const {name,location,startTime,date,code,reserveId} = props;
	// const {row, section} = props;

	return (
			<View style={styles.container}>

				<View style={styles.info_box}>
					<View style={styles.result_container}>
						{/*TODO => get Image from server*/}
						<Image source={require('./../../../assets/8.jpg')} style={styles.image} />
					</View>

					<MoreInfoSearchResult name={name} date={date} location={location} startTime={startTime}/>

					<ReserveButton code={code} reserveId={reserveId}/>
				</View>

				<View style={styles.result_separator}/>

			</View>
	);
};

export default observer(ReserveListItem);
