import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from '../../../ball-library/theme';


const styles = StyleSheet.create({
  container: {
    width: wp('52%'),
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: Colors.lightGrey,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    alignSelf: 'center',
    marginTop:8
  },
  infoContainer: {
    width: wp('52%'),
    height: 24,
    flexDirection: 'row',
    alignSelf:'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.lightGrey,
    borderBottomRightRadius:8,
    borderBottomLeftRadius:8,
    marginTop: -10
  },
  colon: {
    alignSelf: 'center',
    // textAlign: 'center',
    // textAlignVertical: 'center'
    fontFamily:'IRANSansMobile(FaNum)',

  },
  timeName: {
    color: 'grey',
    fontFamily:'IRANSansMobile(FaNum)',
  },
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  blue: {
    color: Colors.mainBlue,
    fontFamily:'IRANSansMobile(FaNum)',
    fontSize:20
  },
  deepPurple: {
    color: Colors.primaryPurple,
    fontFamily:'IRANSansMobile(FaNum)',
    fontSize:20

  },
  purple: {
    color: Colors.lightPurple800,
    fontFamily:'IRANSansMobile(FaNum)',
    fontSize:20

  }
});

export default styles;
