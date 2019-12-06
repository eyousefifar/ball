import {StyleSheet} from 'react-native';


export default () => {
    return StyleSheet.create({
        container:{
            width:'100%',
            paddingHorizontal:16,
            marginBottom:16
        },
        header_container:{
            width: '100%',
            marginBottom: 4

        },
        header_text:{
            fontFamily:'IRANSansMobile(FaNum)_Medium',
            fontSize:12,
            color:'#282828'
        },
        desc_container:{
            width:'100%',
            paddingHorizontal: 4,
        },
        desc_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize: 11,
            textAlign:'right',
            lineHeight:22

        }

    });
};
