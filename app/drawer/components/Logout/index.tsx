import React from 'react';
import {Provider} from 'react-native-paper';
import {View, Text, ToastAndroid} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Touchable, defaultTheme, Colors, userProfile, auth} from '../../../ball-library';
import {closeDrawer, dismissLogoutOverLay} from "../../library/nav";
import {logoutServer} from "../../library/api";


class LogoutOverlay extends React.Component {

	handleLogout = async () => {
		//TODO : check again maybe has bug
		let logoutRes = await logoutServer(auth.getToken());

		if (logoutRes.state === 'success'){
			await userProfile.logout();
			ToastAndroid.show(logoutRes.message,ToastAndroid.SHORT)
		}else {
			ToastAndroid.show(logoutRes.message,ToastAndroid.SHORT)
		}

		await dismissLogoutOverLay();
		await closeDrawer();

	};

	render() {
		const styles = styleGenerator();
		return (
				<Provider theme={defaultTheme}>
					<View style={styles.container}>
						<Touchable
								style={{zIndex: -1}}
								onPress={dismissLogoutOverLay}
								rippleColor={'lightGrey'}
						/>
						<View style={styles.cardContainer}>

							<View style={{width: '100%', height: 100, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={styles.popup_text}>مایل به خروج از حساب کاربری خود هستید؟</Text>
							</View>

							<View style={styles.two_buttons}>

								{/*logout from app*/}
								{/*TODO  : logout and dismiss overlay and drawer*/}
								<RectButton style={[styles.reserve_button, {backgroundColor: '#fff'}]} onPress={this.handleLogout}>
									<Text style={[styles.reserve_button_text, {color: Colors.primaryPurple}]}>بله</Text>
								</RectButton>

								<RectButton style={styles.reserve_button} onPress={dismissLogoutOverLay}>
									<Text style={styles.reserve_button_text}>خیر</Text>
								</RectButton>

							</View>
						</View>
					</View>
				</Provider>
		);
	}
}

export default observer(LogoutOverlay);
