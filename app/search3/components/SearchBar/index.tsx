import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RectButton} from "react-native-gesture-handler";

// styles
import styleGenerator from './styles';
// local
import {Colors, Icon} from "../../../ball-library";
import {searchStoreClass} from "../../store/SearchStore";

interface ISearchBar {
    onMenuPress: () => void,
    onMapButtonPress : () => void,
    searchText: string,
}

const SearchBar = (props: ISearchBar) => {

    const styles = styleGenerator();
    const {onMapButtonPress,onMenuPress,searchText} = props;


    const handleChangeQuery = async (text:string) => {
        await searchStoreClass.setQuery(text);
        if (text.length > 2){
            await searchStoreClass.getAllReserveList()
        }
    };

    return (
        <View style={styles.searchBar_container_area}>
            <View style={styles.searchBar_container}>

                <RectButton style={styles.right_section} onPress={onMenuPress}>
                    <Icon type={'simpleLine'} name={'menu'} size={22} color={Colors.titleBarLines}/>
                </RectButton>

                <TextInput style={styles.middle_section}
                           placeholder={searchText}
                           value={searchStoreClass.queryValue}
                           onChangeText={handleChangeQuery}/>

                <View style={styles.left_section}>
                    <View style={styles.left_section_container_box}>
                        <RectButton style={styles.left_section_container_box} onPress={onMapButtonPress}>
                            <Text style={styles.left_section_text}>نقشه</Text>
                        </RectButton>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default observer(SearchBar);
