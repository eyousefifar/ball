import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// local
import ReserveItem from './ReserveItem';
// styles
import styleGenerator from './styles';
import NotificationItem from "./NotificationItem";

// types
interface ItemList {
	type: 'reserve' | 'notification'
}

const ItemList = (props: ItemList) => {
	const styles = styleGenerator();
	const {type} = props;
	return (
			<View style={styles.container}>
				{type === 'reserve' &&
        <View>
          <ReserveItem id={1} name={'سالن منتظری'} time={'17:30'} date={'1398/1/4'} icon_name={'basketball'}/>
          <ReserveItem id={2} name={'استخر رنگین کمان'} time={'16:00'} date={'1398/2/17'} icon_name={'Pool'}/>
          <ReserveItem id={3} name={'مجموعه ورزشی انقلاب'} time={'8:30'} date={'1398/3/6'} icon_name={'futsal'}/>
        </View>
				}
				{type === 'notification' &&
        <View>
          <NotificationItem id={1} icon_name={'Pool'} message={'رزرو شما در ورزشگاه منتظری لغو شد'}/>
          <NotificationItem id={2} icon_name={'volleyball'} message={'رزرو شما در ورزشگاه انقلاب لغو شد'}/>
          <NotificationItem id={3} icon_name={'Game-room'} message={'پیامی از پشتیبانی دریافت کردید'}/>
        </View>
				}

			</View>
	);
};

export default observer(ItemList);
