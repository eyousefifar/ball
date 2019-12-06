import {StyleSheet} from 'react-native';


export default () => {
    return StyleSheet.create({
        card_name:{
            fontFamily:'IRANSansMobile(FaNum)_Medium',
            fontSize:12,
            color:'#2f2f2f',
            marginBottom:4
        },

        more_info_container:{
            flex:1,
            height: '90%',
            paddingHorizontal: 16,
            justifyContent: 'center',
            // backgroundColor:'yellow'
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
            color:'#414141',
            // marginBottom: 2
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
        },

        price_section:{
            flexDirection:'row-reverse',
            justifyContent:'space-between',
            alignItems:'center'
        },
        time_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:13,
            color:'#717171'
        },
        date_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:13,
            color:'#717171'
        }
    });
};
