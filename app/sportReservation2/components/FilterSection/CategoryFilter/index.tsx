import React from 'react';
import {ScrollView} from 'react-native';
// styles
import styleGenerator from "./styles";
// local
import {sportReservationStore} from '../../../store/SportReservationStore'
import NormalFilterButton from "../../../../ball-library/NormalFilterButton";

interface ICategoryFilter {
	border?: boolean,
	elevation?: boolean
}

const CategoryFilter = (props: ICategoryFilter) => {
	const styles = styleGenerator();
	const {border, elevation} = props;

	return (
			<ScrollView
					horizontal={true}
					style={styles.horizontal_lists}
					contentContainerStyle={styles.filters_container}
					showsHorizontalScrollIndicator={false}>
				{
					sportReservationStore.getAllCategoryFilter.map((data, index) => {
						return (
								<NormalFilterButton key={index} border={border} elevation={elevation} invert={true} title={data.name}/>
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
