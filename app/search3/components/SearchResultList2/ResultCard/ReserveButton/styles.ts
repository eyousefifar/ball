import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        container:{
            width:70,
            height:'100%',
            justifyContent:'center',

            // backgroundColor: 'green',

        },
        reserve_button:{
            width: 65,
            borderRadius: 4,
            alignItems: 'center',
            backgroundColor:Colors.primaryPurple
        },
        reserve_button_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            color:'#fff',
            marginTop:4,
            marginBottom:6
        },

        location_button_container:{
            width:65,
            borderRadius: 4,
            borderWidth: 0.7,
            borderColor:'rgba(0,0,0,0.7)',
            marginTop:4,
        },
        location_button:{
            width: '100%',
            borderRadius: 8,
            overflow:'hidden',
            alignItems: 'center',

        },
        location_button_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:12,
            color:Colors.titleBarLines,
            marginTop:2,
            marginBottom:2
        },

    });
};
