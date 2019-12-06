import React from 'react';
import { View ,Text} from 'react-native';
import { Headline, Caption, Paragraph } from 'react-native-paper';
import { observer } from 'mobx-react';
// styles
import { infoStyle as styleGenerator } from './styles';
import {Icon, userProfile} from "../../../ball-library";
import {RectButton} from "react-native-gesture-handler";

interface IInfo {
  setEditInformationOn: () => void,
}

const Info = (props:IInfo) => {
  const styles = styleGenerator();
  const {setEditInformationOn} = props;

  const userName = userProfile.getUserName();
  const userPhoneNumber = userProfile.getPhoneNumber();
  return (
    <View style={styles.container}>
      <View style={styles.profile_container}>
        <Text style={styles.profile_name_text}>{userName}</Text>
        <Text style={styles.profile_number_text}>{userPhoneNumber}</Text>
      </View>
      <View style={styles.edit_button_container}>

        <RectButton style={styles.edit_button} onPress={setEditInformationOn}>
          <Text style={styles.edit_button_text}>ویرایش اطلاعات</Text>
          <Icon type={'ion'} name={'md-create'} size={25} color={'#717171'} />
        </RectButton>

      </View>

    </View>
  );
};

export default observer(Info);
