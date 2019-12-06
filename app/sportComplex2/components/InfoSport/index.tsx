import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {RectButton} from "react-native-gesture-handler";
import {Icon, mapLink} from "../../../ball-library";

const InfoSport = () => {

  const onMapPress = async () => {
    await mapLink({
      lat: 34.63454,
      long: 50.6565
    });
  };

    const styles = styleGenerator();

    return (
        <View style={styles.container}>
            <View style={styles.address_box_container}>

                <View style={styles.address_label_container}>
                    <Text style={styles.address_label_text}>آدرس : </Text>
                </View>

                <View style={styles.address_container}>
                    <Text style={styles.address_text}>زنبیل آباد-کوچه دوازده-فرعی سوم مجموعه ورزشی انقلاب</Text>
                </View>
            </View>

            <View>
                <RectButton style={styles.button_container} onPress={onMapPress}>
                    <Icon type={"simpleLine"} name={'location-pin'} color={'#fff'} size={23}/>
                    <Text style={styles.button_text}>مکان نما</Text>
                </RectButton>
            </View>
        </View>

    );
};

export default observer(InfoSport);
