import React, {useState} from 'react';
import {ListRenderItem, View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import {FlatList} from "react-native-gesture-handler";
import {ISportCategory} from "../../store/types";
import CardItem from "../CardItem";

const CategoryItem = () => {

	const styles = styleGenerator();
	const [sports, setSports] = useState([
		{
			id: 1,
			name: 'خانه بازی',
			image:require('../../assets/basketball.jpg'),
			score: 4.5,
			price: 21000,
			address: 'زنبیل آباد',
			discount:15
		},
		{
			id: 2,
			name: 'استخر انقلاب',
			image:require('../../assets/sporthall.jpg'),
			score: 4.5,
			price: 21000,
			address: 'زنبیل آباد'
		},
		{
			id: 3,
			name: 'فوتسال',
			image:require('../../assets/swimimg.jpg'),
			score: 4.5,
			price: 21000,
			address: 'زنبیل آباد',
			discount:15
		},
		{
			id: 4,
			name: 'خانه بازی',
			image:require('../../assets/basketball.jpg'),
			score: 4.5,
			price: 21000,
			address: 'زنبیل آباد'
		},
		{
			id: 5,
			name: 'استخر انقلاب',
			image:require('../../assets/sporthall.jpg'),
			score: 4.5,
			price: 21000,
			address: 'زنبیل آباد'
		},
		{
			id: 6,
			name: 'فوتسال',
			image:require('../../assets/swimimg.jpg'),
			score: 4.5,
			price: 21000,
			address: 'زنبیل آباد',
			discount:25
		},
	]);


	const renderSportCategory: ListRenderItem<ISportCategory> = ({item}) => {
		return (
				<CardItem id={item.id} image={item.image} name={item.name} discount={item.discount}
				          address={item.address} price={item.price} score={item.score}/>
		)
	};

	return (
			<View style={styles.list_container}>
				<FlatList style={styles.list} contentContainerStyle={{alignItems: 'flex-end', justifyContent: 'center',alignSelf:'center'}} data={sports} renderItem={renderSportCategory}
				          showsVerticalScrollIndicator={false} numColumns={3}
				          keyExtractor={(value, index) => index.toString()}/>
			</View>
	);
};

export default observer(CategoryItem);
