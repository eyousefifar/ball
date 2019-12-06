import {StyleSheet} from 'react-native';
import {Radius} from "../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        sport_parent_container:{
            width: 80,
            height: undefined,
            marginHorizontal:12,
            transform: [{rotateY: '180deg'}],
            borderTopLeftRadius:Radius.typeButton_4,
            borderTopRightRadius:Radius.typeButton_4,
            overflow:'hidden'
        },
        sport_container: {
            width: '100%',
            height: undefined,
            paddingBottom:8,
        },
        image_card_style:{
            borderRadius:Radius.typeButton_4
        },
        card_image:{
            width: 80, 
            height: 80  
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
        header_item: {
            fontFamily: 'IRANSansMobile(FaNum)_Medium',
            fontSize: 11,
            color: '#212121'
        },
    });
};
