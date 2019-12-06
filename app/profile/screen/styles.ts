import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Colors} from "../../ball-library/theme";


export default () => {
	return StyleSheet.create({
    favoritesTitle : {
      textAlign: 'right',
      marginTop: 12,
      marginRight : wp('5%')
    },
  });
};
