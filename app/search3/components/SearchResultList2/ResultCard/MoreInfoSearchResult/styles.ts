import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        card_name:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:12,
            color:Colors.titleBarLines,
            marginBottom:4,

        },

        more_info_container:{
            width:'60%',
            height: '90%',
            paddingHorizontal: 16,
            justifyContent: 'center',

            // backgroundColor:'red'

        },
        more_info_section:{
            flexDirection: 'row-reverse',
            justifyContent:'space-between',
        },

        address_section:{
            flexDirection:'row-reverse',
            alignItems:'center',
            marginBottom: 2
        },
        address_section_text:{
            marginRight:4,
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:10,
            color:Colors.grayBall,
        },

        star_section:{
            flexDirection:'row-reverse',
            marginLeft:8,
            alignItems:'center'
        },
        star_section_text:{
            marginRight:4,
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:10,
            marginLeft:4,
            color:Colors.grayBall,
        },

        price_section:{
            flexDirection:'row-reverse',
            justifyContent:'space-between',
            alignItems:'center'
        },
        price_section_text:{
            marginRight:4,
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:12,
            color:Colors.greenBall
        },
    });
};
