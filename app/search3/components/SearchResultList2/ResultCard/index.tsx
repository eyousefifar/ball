import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from 'react-native-gesture-handler'
// styles
import styleGenerator from './styles';
//local
import ReserveButton from './ReserveButton'
import MoreInfoSearchResult from "./MoreInfoSearchResult/MoreInfoSearchResult";
import {searchStoreClass} from "../../../store/SearchStore";
import {showSportReserve, showSportReserve2} from "../../../library/nav";
import {Radius} from "../../../../ball-library/theme";

interface IListData {
    sportId: string,
    name: string,
    location: string,
    price: number,
    score: number,
    coordinate: Array<number>,
    discount: number,
}

const SearchResultItem = (props: IListData) => {
    const styles = styleGenerator();
    const {sportId, name, location, price, score, coordinate, discount} = props;
    const finalDiscount = discount ? discount : 0;

    const handleResultSelect = async () => {
        await showSportReserve(sportId)
    };

    return (
        <View style={styles.container}>

            <RectButton style={styles.info_box} onPress={handleResultSelect}>
                <View style={styles.result_container}>

                    {/*TODO => get image from server*/}
                    <ImageBackground source={require('../../../assets/3.jpg')}
                                     style={styles.image_search_result}
                                     imageStyle={{borderRadius: Radius.typeButton_4}}>
                        {finalDiscount != 0 &&
                        <View style={styles.discount}>
                            <Text style={styles.discount_text}>{finalDiscount}%</Text>
                        </View>
                        }
                    </ImageBackground>

                    <MoreInfoSearchResult name={name} location={location} price={price} score={score}/>
                </View>
                <ReserveButton sportId={sportId} coordinate={coordinate}/>
            </RectButton>

            <View style={styles.result_separator}/>

        </View>
    );
};

export default observer(SearchResultItem);
