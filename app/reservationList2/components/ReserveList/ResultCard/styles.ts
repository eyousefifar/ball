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
            flexShrink:1
        },
        image:{
            width:65,
            height:65,
            borderRadius:Radius.typeButton_4
        },

        discount: {
            position: 'absolute',
            top: 0,
            left: 0,
            paddingHorizontal:3,
            backgroundColor:'#dc0617',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopStartRadius:8,
            borderBottomEndRadius:8
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
