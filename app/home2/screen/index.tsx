import React, {useEffect, useState} from 'react';
import {ScrollView, ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react';
import {Provider} from 'react-native-paper';
import {defaultTheme, screens, timeClass, userProfile} from '../../ball-library';
// @ts-ignore
import Pushe from 'pushe-react-native'
// styles
import {homeStyle as styleGenerator} from './styles';
//local
import SearchBar from "../components/SearchBar";
import CarouselItem from '../components/Carousel'
import NestedList from '../components/NestedList'
import {toggleDrawer, mapPress, searchPress} from "../library/nav";
import Loading from "../../ball-library/Loading";
import {getHomeItems} from "../library/api";
import {HomeSportList} from "../library/types";

const Home = () => {
    const styles = styleGenerator();

    const [homeList, setHomeList] = useState<Array<HomeSportList>>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const firstLaunch = async () => {
        // console.warn('BEGIN')

        let homeRes = await getHomeItems();

        if (homeRes.state === 'success') {
            setHomeList(homeRes.sportLists);
            // console.warn('END');

            setLoading(true);
            await userProfile.profileCheck();
            await timeClass.getTimeAndDate();

        } else {
            ToastAndroid.show(homeRes.message, ToastAndroid.SHORT);
            setLoading(true);
            await userProfile.profileCheck();
            await timeClass.getTimeAndDate();

        }
    };

    useEffect(() => {
        Pushe.initialize(true);
        Pushe.getPusheId()
            .then((pusheId: string) => {
                // console.warn('PushID : ', pusheId)
                userProfile.setPushID(pusheId);
                userProfile.checkFirstTime(pusheId);
            });

        firstLaunch()
    }, []);


    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={loading} screenId={screens.home.id}>
                <View style={styles.container}>
                    <SearchBar searchText={'جستجو ...'} onMenuPress={toggleDrawer} onSearchBoxPress={searchPress}
                               onMapBoxPress={mapPress}/>
                    <ScrollView style={{flex: 1}}>
                        <CarouselItem/>
                        <NestedList homeList={homeList}/>
                    </ScrollView>
                </View>
            </Loading>

        </Provider>
    );
};

export default observer(Home);
