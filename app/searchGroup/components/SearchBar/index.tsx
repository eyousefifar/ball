import React from 'react';
import {View, TextInput} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Icon} from "../../../ball-library";



interface ISearchBar {
    onMenuPress: () => void,
    onMapButtonPress? : () => void,
    searchText: string,
}

const SearchBar = (props: ISearchBar) => {

    const styles = styleGenerator();

    return (
        <View style={styles.searchBar_container_area}>
            <View style={styles.searchBar_container}>

                <RectButton style={styles.right_section} onPress={props.onMenuPress}>
                    <Icon type={'simpleLine'} name={'menu'} size={22} color={'#9e9e9e'}/>
                </RectButton>

                <TextInput style={styles.middle_section}
                           placeholder={props.searchText}
                           // value={storeClass.query}
                           // onChangeText={storeClass.setQuery}
                />

            </View>
        </View>
    );
};

export default observer(SearchBar);
