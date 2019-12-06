import {StyleSheet} from 'react-native';


export default () => {
    return StyleSheet.create({
        sport_parent_container:{
            width: 90,
            height: undefined,
            marginHorizontal:12,
            // transform: [{rotateY: '180deg'}],
            borderTopLeftRadius:8,
            borderTopRightRadius:8,
            overflow:'hidden'
        },
        sport_container: {
            width: '100%',
            height: undefined,
            paddingBottom:8,
        },
        discount: {
            position: 'absolute',
            top: 0,
            left: 0,
            paddingHorizontal:5,
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
        header_item: {
            fontFamily: 'IRANSansMobile(FaNum)_Medium',
            fontSize: 11,
            color: '#212121'
        },
    });
};
