import React from 'react';
import {View, Text} from 'react-native';
import {Button, Colors, Icon} from '../../../ball-library';
import {observer} from 'mobx-react-lite';
// styles
import {actionButtonsStyle as styleGenerator} from './styles';
import {RectButton} from "react-native-gesture-handler";

// types
interface IActionButton {
	editInformation: boolean;
	setEditInformationOn: () => void;
	setEditInformationOff: () => void;
}

const ActionButtons = (props: IActionButton) => {
	const {editInformation, setEditInformationOn, setEditInformationOff} = props;
	const styles = styleGenerator();
	if (editInformation) {
		return (
				<View style={styles.container}>

          <View style={styles.submit_button_container}>
            <RectButton style={styles.submit_button} onPress={setEditInformationOff}>
              <Text style={styles.submit_button_text}>تایید</Text>
            </RectButton>
          </View>

          <View style={styles.cancel_button_container}>
            <RectButton style={styles.submit_button} onPress={setEditInformationOff}>
              <Text style={styles.submit_button_text}>لغو</Text>
            </RectButton>
          </View>

				</View>
		);
	} else {
		return (
        <View style={styles.edit_button_container}>
          <RectButton style={styles.edit_button} onPress={setEditInformationOn}>
            <Text style={styles.edit_button_text}>ویرایش اطلاعات</Text>
            <Icon type={'ion'} name={'md-create'} size={25} color={'#717171'} />
          </RectButton>
        </View>
		);
	}
};

export default observer(ActionButtons);
