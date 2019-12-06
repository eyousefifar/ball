import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import {defaultTheme} from "../../ball-library/theme";
import {Header, screens} from "../../ball-library";
import {Provider} from "react-native-paper";
import FilterSection from "../components/FilterSection";
import TitleBar from "../../search3/components/TitleBar";
import ReserveList from "../components/ReserveList";
import {sportReservationStore} from '../store/SportReservationStore'
import FinalPrice from '../components/ReserveList/FinalPrice'
import {dismissSportReservationScreen} from "../library/nav";
import Loading from "../../ball-library/Loading";


interface ISportReservation {
    sportId: string
}

const SportReservation = (props: ISportReservation) => {

    const styles = styleGenerator();
    const {sportId} = props;

    const firstLaunch = async () => {
        await sportReservationStore.reset();
        await sportReservationStore.setSportId(sportId);
        await sportReservationStore.getAllReserveList();

        // let Dates = ['2019-12-17','2019-12-16','2019-12-15','2019-12-14','2019-12-13','2019-12-12','2019-12-11','2019-12-10','2019-12-20'];
        // let times = ['1310f3e4-a38e-40d4-8b93-da297ea77931','26cbdaad-4777-4d8e-8510-5d1d26e8d77c','bfe34843-c66a-427d-91c7-6db15cbe86aa','ce54372e-e2b9-491a-af6d-3b8019ea6402'];
        // await makeFakeData(Dates,times)
    };


    useEffect(() => {
        firstLaunch()
    }, []);


    return (
        <Provider theme={defaultTheme}>
            <View style={{flex: 1}}>
                <Loading dark={true} loaded={sportReservationStore.loading} screenId={screens.sport.id}>
                    <View style={styles.container}>
                        <Header
                            title={'رزرو'}
                            drawBehind={false}
                            mode={'fullWidth'}
                            onPress={dismissSportReservationScreen}/>
                        <View style={{flex: 1}}>
                            <ScrollView style={{paddingHorizontal: 16}}>
                                <FilterSection/>
                                <TitleBar title={'سانس ها'} fontStyle={'thick'}/>
                                <ReserveList reserveList={sportReservationStore.sansesList}
                                             isEmpty={sportReservationStore.isEmptyReserve}/>
                            </ScrollView>
                            <FinalPrice final_discount={sportReservationStore.getTotalDiscount}
                                        final_price={sportReservationStore.totalAmount}
                                        reserved_items={sportReservationStore.getFinalReserve}
                                        sportId={sportId}
                            />
                        </View>
                    </View>
                </Loading>
            </View>
        </Provider>
    );
};


export default observer(SportReservation);

