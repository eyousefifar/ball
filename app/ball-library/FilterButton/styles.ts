import {StyleSheet} from 'react-native';
import {Colors} from "../theme";


export default () => {
    return StyleSheet.create({
        container:{
            height:35,
            marginLeft:8,
            borderRadius:16,
            backgroundColor: '#fafafa',
            marginHorizontal:2,
            marginVertical:8,
            overflow:'hidden'
        },
        filterButton:{
            flexDirection:'row-reverse',
            alignItems:'center',
            justifyContent:'center',
            height:'100%',
            // width:'100%',
            paddingHorizontal:6,
            paddingVertical:6,
        },
        filterButton_pressed:{
            backgroundColor:Colors.primaryPurple
        },
        filterButton_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:12,
            marginRight:12,
            marginLeft:12,
        },
        filterButton_text_pressed:{
            color:'#fff'
        }
    });
};
