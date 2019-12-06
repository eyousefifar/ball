import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import {Colors, Switch} from "../../../ball-library";
import CategoryFilter from './CategoryFilter'
import TitleBar from "./TitleBar";
import CarouselMonth from './DateCarousel/CarouselMonth'
import CarouselDay from './DateCarousel/CarouselDay'
import {sportReservationStore} from "../../store/SportReservationStore";

const FilterSection = () => {
	const styles = styleGenerator();

	const handleChangeSwitch = async (state:'مرد'|'زن') => {
		// console.warn('SwitchState : ', state);
		await sportReservationStore.setGenderState(state);
		await sportReservationStore.getAllReserveList();
	};

	return (
			<View style={styles.container}>
				<Switch border={true} onChangeSwitch={handleChangeSwitch} />
				<TitleBar title={'تاریخ'} fontStyle={'thin'} />
				<CarouselMonth />
				<CarouselDay />
			</View>

	);
};

export default observer(FilterSection);
