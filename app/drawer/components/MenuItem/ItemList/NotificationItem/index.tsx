import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {Colors, Icon} from "../../../../../ball-library";
import {INotificationItem} from "../../../../store/types";


const NotificationItem = (props:INotificationItem) => {

	const styles = styleGenerator();
	const {id,message,icon_name} = props;

	return (
			<View style={styles.container}>
					<Icon type={'ball'} name={icon_name} color={Colors.primaryPurple} size={23} />
					<Text style={styles.notification_text}>{message}</Text>
			</View>
	);
};

export default observer(NotificationItem);
