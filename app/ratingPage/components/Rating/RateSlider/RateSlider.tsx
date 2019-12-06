import React from 'react';
import {View, Text,Slider} from 'react-native';
// import Slider from '@react-native-community/slider';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {Colors} from "../../../../ball-library/theme";

interface IRateSlider {
	name: string,
	onChangeRate:(value:number) => void,
	value:number
}

const RateSlider = (props: IRateSlider) => {
	const styles = styleGenerator();
	const {name,value,onChangeRate} = props;

	return (
			<View style={styles.container} >
				<View style={styles.titleContainer}>
					<Text style={styles.slider_text}>{name}</Text>
				</View>
				<View style={styles.slideContainer}>
					<Slider
							style={styles.slider}
							value={value}
							onValueChange={onChangeRate}
							minimumValue={0}
							maximumValue={5}
							step={1}
							minimumTrackTintColor={Colors.primaryPurple}
							maximumTrackTintColor={Colors.grey}
							thumbTintColor={Colors.primaryPurple}
					/>
					<View style={styles.sliderNumber}>
						<Text style={styles.number}>0</Text>
						<Text style={styles.number}>1</Text>
						<Text style={styles.number}>2</Text>
						<Text style={styles.number}>3</Text>
						<Text style={styles.number}>4</Text>
						<Text style={styles.number}>5</Text>
					</View>
				</View>
			</View>
	);
};

export default observer(RateSlider);
