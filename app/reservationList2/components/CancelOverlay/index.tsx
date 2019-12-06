import React from 'react';
import {Provider} from 'react-native-paper';
import {View, Text, ToastAndroid} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Touchable, defaultTheme, Colors, auth} from '../../../ball-library';
import {dismissCancelReserve} from "../../library/nav";
import {deleteReserve} from "../../library/api";
import {reserveListStore} from "../../store/ReserveStore";


interface ICancelOverlay {
	reserveItemId:string
}

const CancelOverlay = (props:ICancelOverlay) => {
    const styles = styleGenerator();
    const {reserveItemId} = props;


    const handleCancelReserve = async () => {
        let delRes = await deleteReserve(auth.getToken(),reserveItemId);

		if (delRes.state === 'success'){
			await ToastAndroid.show(delRes.message,ToastAndroid.SHORT);
            await reserveListStore.resetReserveList();
            await dismissCancelReserve();
            await reserveListStore.getAllData();
        }else {
			await ToastAndroid.show(delRes.message,ToastAndroid.SHORT);
			await dismissCancelReserve();

		}
    };


    return (
        <Provider theme={defaultTheme}>
            <View style={styles.container}>
                <Touchable
                    style={{zIndex: -1}}
                    onPress={dismissCancelReserve}
                    rippleColor={'lightGrey'}
                />
                <View style={styles.cardContainer}>

                    <View style={{width: '100%', height: 100, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.popup_text}>مایل به لغو رزرو خود هستید؟</Text>
                    </View>

                    <View style={styles.two_buttons}>

                        <RectButton style={[styles.reserve_button, {backgroundColor:Colors.whiteBall}]}
                                    onPress={handleCancelReserve}>
                            <Text style={[styles.reserve_button_text, {color: Colors.primaryPurple}]}>بله</Text>
                        </RectButton>

                        <RectButton style={styles.reserve_button} onPress={dismissCancelReserve}>
                            <Text style={styles.reserve_button_text}>خیر</Text>
                        </RectButton>

                    </View>
                </View>
            </View>
        </Provider>
    );
}

export default observer(CancelOverlay);
