import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {Colors, Icon} from "../../../../../ball-library";
import {ReserveItem} from "../../../../store/types";

const NotificationItem = (props: ReserveItem) => {

	const styles = styleGenerator();
	const {id, icon_name, name, date, time} = props;

	return (
			<View style={styles.container}>

				<View style={styles.reserve_name_container}>
					<Icon type={'ball'} name={icon_name} color={Colors.primaryPurple} size={23}/>
					<Text style={styles.reserve_name_text}>{name}</Text>
				</View>

				<View style={styles.reserve_name_container}>
					<Text style={styles.reserve_time}>{time}</Text>
					<Text style={styles.reserve_date}>{date}</Text>
				</View>

			</View>
	);
};

export default observer(NotificationItem);
