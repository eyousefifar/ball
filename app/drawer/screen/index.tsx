import React from 'react';
import {View, ScrollView} from 'react-native';
import {Provider} from 'react-native-paper';
import {Separator, defaultTheme, auth, screens} from '../../ball-library';
import {observer} from 'mobx-react-lite';
// styles
import styles from './styles';
// local
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import Communications from '../components/Communications';
import {
	showAboutUs,
	showNotifications,
	showReserves,
	showSupport,
	showLogout,
	showWallet
} from '../library/nav';
import {IDrawerItem} from "../store/types";


const Drawer = () => {
	const drawerItems: Array<IDrawerItem> = [
		{
			id: screens.wallet.id,
			title: 'کیف پول',
			onPress: showWallet,
			type: 'plain'
		},
		{
			id: screens.reservationList.id,
			title: 'رزرو ها',
			onPress: showReserves,
			type: 'itemList',
			item_list_type:'reserve'
		},
		{
			id: screens.notifications.id,
			title: 'اعلان ها',
			onPress: showNotifications,
			type: 'itemList',
			item_list_type:'notification'
		},
		{
			id: screens.support.id,
			title: 'پشتیبانی',
			onPress: showSupport,
			type: 'plain'
		},
		{
			id: screens.aboutUs.id,
			title: 'درباره ما',
			onPress: showAboutUs,
			type: 'plain'
		},
		{
			id: 'FAQ',
			title: 'سوالات متداول',
			onPress: () => {
			},
			type: 'plain'
		},
		{
			id: 'privacyAndPolicy',
			title: 'شرایط و قوانین',
			onPress: () => {
			},
			type: 'plain'
		},
		{
			id: screens.logout.id,
			title: 'خروج از حساب کاربری',
			onPress: showLogout,
			type: auth.isAuthorized ? 'plain' : 'empty'
		}
	];
	const drawerItemsLength = drawerItems.length;
	const renderItem = (item: IDrawerItem, index: number) => {
		if (item.type !== 'empty') {
			return (
					<View key={item.id}>
						<MenuItem
								id={item.id}
								title={item.title}
								onPress={item.onPress}
								type={item.type}
								item_list_type={item.item_list_type}
						/>
						{index !== drawerItemsLength && <Separator/>}
					</View>
			);
		} else return null;
	};

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<Header/>
					<ScrollView style={{flex: 1}}>
						{drawerItems.map(renderItem)}
					</ScrollView>
					<Communications/>
				</View>
			</Provider>
	);
};

export default observer(Drawer);
