import React from 'react';
import {ScrollView} from 'react-native';
// styles
import styleGenerator from "./styles";
// local
import {searchStoreClass} from '../../store/SearchStore'
import {FilterButton} from "../../../ball-library";

interface ICategoryFilter {
	border?: boolean,
	elevation?: boolean
}

const CategoryFilter = (props: ICategoryFilter) => {
	const styles = styleGenerator();
	const {border, elevation} = props;

	const handleFilter = (isSelected:boolean,title:string) => {
		if (!isSelected)
			searchStoreClass.addToFilters(title);
		if (isSelected)
			searchStoreClass.removeFromFilter(title);

		searchStoreClass.getAllReserveList()
	};

	return (
			<ScrollView
					horizontal={true}
					style={styles.horizontal_lists}
					contentContainerStyle={{paddingVertical: 4}}
					showsHorizontalScrollIndicator={false}>
				{
					searchStoreClass.allFilterCategories.map((data, index) => {
						return (
								<FilterButton key={index} border={border} elevation={elevation} invert={true}
											  iconName={data.icon}  title={data.title}
											  onStateChange={(isSelected) =>  handleFilter(isSelected,data.title)}/>
						)
					})
				}

			</ScrollView>
	)

};

export default CategoryFilter;


{/*
<FilterButton key={index} id={data.id} iconType={data.iconType} icon={data.icon} invert={true}
              title={data.title} isSelected={storeClass.getSpecificFilterCategory(data.id)}
              onPressFilterCategory={() => storeClass.toggleFilterCategory(data.id)}
/>*/
}
