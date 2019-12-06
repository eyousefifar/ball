import {StyleSheet} from 'react-native';
import {Colors} from "../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        container:{
            width:'100%',
            flexDirection:'row-reverse',
            justifyContent:'space-between',
            paddingHorizontal:16,
            marginBottom:16
        },
        vertical_separator:{
            width: 0.7,
            height: '100%',
            backgroundColor:'#3b3b3b',
            borderRadius:1
        },
        reserve_time_section:{
            width:'45%',
            height:'100%',
        },
        header_container:{
            width:'100%',
        },
        header_text:{
            fontFamily:'IRANSansMobile(FaNum)_Medium',
            fontSize:13,
            color:Colors.maleBlue,
            marginBottom: 4
        },
        days_time:{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            width:'100%'
        },
        days_time_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize: 11,
            color:Colors.maleBlue
        }
    });
};
