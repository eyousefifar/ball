import {StyleSheet} from 'react-native';
import {Radius} from "../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        searchBar_container_area: {
            width: '100%',
            elevation: 2,
            borderRadius: Radius.typeButton_4,
            alignSelf: 'center',
            overflow: 'hidden',
            alignItems: 'center',
            backgroundColor: '#fcfcfc'
        },
        searchBar_container: {
            width: '100%',
            height: 55,
            flexDirection: 'row-reverse',
            borderRadius: Radius.typeButton_4,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        right_section: {
            width: 48,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        middle_section: {
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            fontSize: 15,
            fontFamily: 'IRANSansMobile(FaNum)',
            textAlign:'right'
        },
        middle_section_text_container: {
            height:'100%',
            justifyContent:'center'
        },
        search_text: {
            fontSize: 15,
            fontFamily: 'IRANSansMobile(FaNum)'
        },
        left_section: {
            height:'100%',
            paddingHorizontal:8,
            justifyContent:'center',
        },
        left_section_container_box:{
            borderWidth: 0.6,
            borderColor: 'rgba(0,0,0,0.7)',
            borderRadius: Radius.typeButton_4,
            alignItems: 'center',
            justifyContent: 'center',
        },
        left_section_text: {
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 14,
            marginVertical: 4,
            marginHorizontal: 16
        },
    });
};
