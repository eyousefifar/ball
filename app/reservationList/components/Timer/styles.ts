import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../ball-library/theme';
const styles = StyleSheet.create({
  container: {
    width: wp('52%'),
    height: 52,
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    borderRadius: wp('8%'),
  },
  infoContainer: {
    width: wp('52%'),
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  colon: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  timeName: {
    textAlign: 'center',
    color: 'grey', // TODO: it should be dark grey
  },
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: Colors.mainBlue,
  },
  deepPurple: {
    color: Colors.primaryPurple,
  },
  purple: {
    color: Colors.lightPurple800,
  },
});

export default styles;
