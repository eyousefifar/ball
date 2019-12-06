import {StyleSheet} from 'react-native';

export default () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '40%',
        },
        result_list: {
            width: '100%',
            height:'70%',
            paddingHorizontal: 2,
            marginBottom:4,
            marginTop:16
        },

        empty_box:{
            width:'100%',
            height:60,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth:0.9,
            borderColor:'rgba(0,0,0,0.3)',
            borderRadius:16,
            marginTop: 16
        },
        empty_box_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:14,
            color:'#616161'
        }

    });

    return {styles};
};
