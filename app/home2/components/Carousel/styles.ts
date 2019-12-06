import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
  const {width} = Dimensions.get('window');
  const item_height = width * 5.5 / 10 ;

  return StyleSheet.create({
    image_background:{
      width: '100%',
      height: item_height,
      overflow:'hidden',
      borderWidth: 1,
      borderColor: Colors.titleBarLines,
      borderRadius: Radius.typeButton_4,
    },
    box_carousel:{
      width:'100%',
      height:'100%',
      justifyContent: 'flex-end',
      alignItems:'flex-start',
      paddingBottom:16,
      paddingLeft:16
    },
    footer_text_container:{
      borderWidth:1,
      borderRadius:Radius.typeButton_4,
      borderColor:Colors.titleBarLines,
      paddingVertical:4,
      paddingHorizontal: 12,
    },
    footer_text:{
      fontSize:13,
      color:Colors.titleBarLines,
      fontFamily:'IRANSansMobile(FaNum)_Medium'
    }
  });
};
