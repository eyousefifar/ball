import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';

interface ITitleBar {
	title: string,
	lineColor?: string,
	titleColor?: string,
	fontStyle : 'thick' | 'thin'
}

const TitleBar = (props: ITitleBar) => {

	const styles = styleGenerator();
	const {title, lineColor, titleColor, fontStyle} = props;

	return (
			<View style={styles.container}>
				<View style={[styles.line, lineColor != null && {backgroundColor: lineColor}]}/>

				<View style={styles.title_container}>
					<Text style={[styles.title_text, titleColor != null && {color: titleColor},
						fontStyle === 'thin' && {fontFamily:'IRANSansMobile(FaNum)'}]}>{title}</Text>
				</View>

				<View style={[styles.line, lineColor != null && {backgroundColor: lineColor}]}/>
			</View>
	);
};

export default observer(TitleBar);
