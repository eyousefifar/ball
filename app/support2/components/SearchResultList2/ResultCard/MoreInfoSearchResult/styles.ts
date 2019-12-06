import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        card_name:{
            fontFamily:'IRANSansMobile(FaNum)_Medium',
            fontSize:12,
            color:'#313131',
            marginBottom:4
        },

        more_info_container:{
            height: '90%',
            paddingHorizontal: 16,
        },
        more_info_section:{
            justifyContent:'space-between',
        },

        address_section:{
            flexDirection:'row-reverse',
            alignItems:'center',
            marginBottom: 2,
            // backgroundColor:'yellow'
            height: 20
        },
        address_section_text:{
            marginRight:4,
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:10,
            color:Colors.grayBall,
        },

        new_message_section:{
            marginBottom: 2
        },
        new_message_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:10,
            color:Colors.redCancel,
        }
    });
};
