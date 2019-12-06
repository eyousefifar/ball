import React from 'react';
import {View, TextInput} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Colors, Icon} from "../../../ball-library";
import {supportListStore} from "../../store/SupportStore";
import {searchStoreClass} from "../../../search3/store/SearchStore";


interface ISearchBar {
    onMenuPress: () => void,
    searchText: string,
}

const SearchBar = (props: ISearchBar) => {
    const styles = styleGenerator();
    const {onMenuPress, searchText} = props;

    const handleSearchTickets = async (text:string) => {
		await supportListStore.setQuery(text);
		if (text.length > 2){
			await supportListStore.getAllData()
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
                           value={supportListStore.query}
                           onChangeText={handleSearchTickets}
                />
            </View>
        </View>
    );
};

export default observer(SearchBar);
