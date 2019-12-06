import {StyleSheet} from 'react-native';
import {Radius} from "../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        container:{
            width:'100%',
            height:80,
            marginVertical:4,
        },
        info_box:{
            width:'100%',
            height:78,
            flexDirection:'row-reverse',
            alignItems:'center',
            justifyContent:'space-between',
            // backgroundColor:'yellow'
        },
        result_container:{
            flexDirection:'row-reverse',
            alignItems:'center',
        },
        image_search_result:{
            width: 70,
            height: 70,
            borderRadius: Radius.typeButton_4,

            flexShrink:1
        },

        discount: {
            position: 'absolute',
            top: 0,
            left: 0,
            paddingHorizontal:3,
            backgroundColor:'#dc0617',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopStartRadius:Radius.typeButton_4,
            borderBottomEndRadius:Radius.typeButton_4
        },
        discount_text: {
            fontFamily: 'IRANSansMobile(FaNum)',
            color:'#fff',
            fontSize:10
        },

        result_separator:{
            width:'100%',
            height:1,
            backgroundColor:'rgba(0,0,0,0.3)',
            borderRadius: 1,
            marginTop:4
        }

    });
};
