import React from 'react';
import {View, Text, ListRenderItem} from 'react-native';
import {FlatList} from "react-native-gesture-handler";
import {observer} from 'mobx-react-lite';
// styles
import styleGenerator from './styles';
//local
import CardItem from './CardItem'


interface IFavoriteList {
    reserved: Array<Sport>
}

const FavoriteList = (props: IFavoriteList) => {
    const {reserved} = props;
    const styles = styleGenerator();

    const renderFavoriteList: ListRenderItem<Sport> = ({item}) => {
        return (
            <CardItem sportId={item.sportSite.uuid} name={item.sportSite.name} address={'آدرس تستی'}
                      image={item.sportSite.mainPicUrl} discount={item.sportSite.maxDiscountPrecent}
					  price={item.sportSite.minPrice} score={item.sportSite.rateAvg}/>
        )
    };

    if (reserved.length != 0) {
        return (
            <View style={styles.container}>
                <FlatList data={reserved} renderItem={renderFavoriteList}
                          horizontal={true} keyExtractor={(item, index) => index.toString()}
                          showsHorizontalScrollIndicator={false} inverted={true}/>
            </View>
        );
    } else {
        return (
            <View style={styles.empty_box_container}>
                <View style={styles.empty_box}>
                    <Text style={styles.empty_box_text}>ورزشی را به لیست علاقه مندی خود اضافه کنید !</Text>
                </View>
            </View>
        )
    }

};

export default observer(FavoriteList);
