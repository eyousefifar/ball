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
            // alignItems:'center',
            // flexShrink:1
        },
        image_sport_site:{
            width: 65,
            height: 65,
            borderRadius: Radius.typeButton_4,
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
