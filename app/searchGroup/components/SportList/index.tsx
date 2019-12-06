import React from 'react';
import {View, ListRenderItem} from 'react-native';
import {observer} from 'mobx-react';
// import {toJS} from "mobx";
// import {FlatList} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Sport} from "../../store/types";
import CardItem from '../CardItem'
import {HomeSport} from "../../library/types";


interface ISportList2 {
	items: Array<HomeSport>
}

const SportList = (props: ISportList2) => {

	const styles = styleGenerator();
	const {items} = props;

	const renderGridSports = (item : HomeSport ) => {
		return (
				<CardItem id={item.uuid} name={item.name} score={item.rateAvg} price={item.minPrice}
				          discount={item.maxDiscountPrecent} address={item.address.area} image={item.mainPicUrl}/>
		)
	};

	return (
			<View style={{height: '75%',alignSelf:'center',width:'100%'}}>
				{/* <WaterfallList
						data={items}
						heightForItem={() => 170}
						preferColumnWidth={94}
						renderItem={renderGridSports}
				/> */}
			</View>
	);
};

export default observer(SportList);


{/*<FlatList data={toJS(items)} style={styles.grid_sports} contentContainerStyle={styles.grid_sports_scroll}
          renderItem={renderGridSports} keyExtractor={(value, index) => index.toString()} numColumns={3}
          showsVerticalScrollIndicator={false}/>*/}
