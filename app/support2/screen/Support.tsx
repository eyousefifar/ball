import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-native-paper';
import {observer} from 'mobx-react';
//styles
import styleGenerator from './styles'
// local
import {defaultTheme, Header, screens, ScrollHeaderPadding,} from '../../ball-library';
import {dismissSupportScreen, toggleDrawer} from '../library/nav';
import SearchBar from './../components/SearchBar'
import SupportResultList from '../components/SearchResultList2'
import Loading from "../../ball-library/Loading";
import {supportListStore} from "../store/SupportStore";


const Support = () => {
    const styles = styleGenerator();

    const firstLaunch = async () => {
        await supportListStore.getAllData();
    };


    useEffect(() => {
        firstLaunch()
    },[]);



    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={supportListStore.loading} screenId={screens.support.id}>
                <View style={{flex: 1}}>
                    <View style={{flexShrink: 1}}>
                        <Header
                            title={'پشتیبانی'}
                            mode={'fullWidth'}
                            drawBehind
                            onPress={dismissSupportScreen}
                        />
                        <ScrollHeaderPadding/>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.box_container}>
                            <SearchBar searchText={'جستجو'} onMenuPress={toggleDrawer}/>
                            <SupportResultList ticketList={supportListStore.getTicketList} />
                        </View>

                    </View>
                </View>
            </Loading>
        </Provider>
    );

};

export default observer(Support);
