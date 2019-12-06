import React, {useEffect, useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {defaultTheme, Header, screens} from '../../ball-library';
// styles
import styleGenerator from './styles';
//local
import SearchBar from '../components/SearchBar'
import {popSearchGroupPage, toggleDrawer} from "../library/nav";
import TitleBar from "../../search3/components/TitleBar";
import SportList from '../components/SportList'
import {getSportGroup} from "../library/api";
import {HomeSport} from "../library/types";
import Loading from "../../ball-library/Loading";


interface ISearchGroup {
    title: string,
    query: string
}

const SearchGroup = (props: ISearchGroup) => {

    const styles = styleGenerator();
    const {title, query} = props;

    const [sportGroupList, setSportGroupList] = useState<Array<HomeSport>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const firstLaunch = async () => {
        let groupRes = await getSportGroup(query);

        if (groupRes.state === 'success') {
            setSportGroupList(groupRes.sportLists);
            setLoading(true)
        } else {
            ToastAndroid.show(groupRes.message, ToastAndroid.SHORT);
            setLoading(true)
        }
    };

    useEffect(() => {
        firstLaunch()
    }, []);


    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={loading} screenId={screens.searchGroup.id}>
                <View style={styles.container}>
                    <Header
                        title={'جستجو'}
                        mode={'fullWidth'}
                        drawBehind={false}
                        onPress={popSearchGroupPage}
                    />
                    <View style={styles.search_container}>
                        <SearchBar onMenuPress={toggleDrawer} searchText={'جستجو...'}/>
                        <TitleBar titleColor={'rgba(0,0,0,0.5)'} title={title} lineColor={'rgba(0,0,0,0.5)'}
                                  fontStyle={'thin'}/>
                        <SportList items={sportGroupList}/>
                    </View>
                </View>
            </Loading>
        </Provider>
    );

};

export default SearchGroup;
