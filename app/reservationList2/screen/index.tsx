import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import {Colors, defaultTheme} from "../../ball-library/theme";
import {auth, Header, screens, ScrollHeaderPadding} from "../../ball-library";
import {Provider} from "react-native-paper";
import {dismissReservationListScreen} from "../library/nav";
import Timer from "../components/Timer";
import {reserveListStore} from '../store/ReserveStore'
import ReserveList from '../components/ReserveList'
import {getAllReserveList} from "../library/api";
import {ReserveItem} from "../library/types";
import Loading from "../../ball-library/Loading";

const ReservationList = () => {

    const styles = styleGenerator();

    const firstLaunch = async () => {
        await reserveListStore.getAllData()
    };

    useEffect(() => {
        firstLaunch();
    },[]);

    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={reserveListStore.loading} screenId={screens.reservationList.id}>
                <View style={styles.container}>
                    <Header
                        title={'رزروها'}
                        mode={'fullWidth'}
                        onPress={dismissReservationListScreen}
                        drawBehind
                    />
                    <ScrollHeaderPadding/>
                    <View style={styles.reserveList_container}>
                        <Text style={styles.reserveList_header_text}>تا نزدیک ترین رزرو</Text>
                        <Timer minimumTime={reserveListStore.minimumTime} />
                        <ReserveList reserveItems={reserveListStore.reserveList} isEmpty={reserveListStore.getReserveListEmpty}/>
                    </View>
                </View>
            </Loading>
        </Provider>
    );
};

export default observer(ReservationList);
