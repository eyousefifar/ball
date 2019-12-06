import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import {Colors, Icon} from "../index";
import {FilterCategory} from "../../search3/store/types";

interface IFilterButton {
    title: string,
    iconName: string,
    invert: boolean,
    elevation?: boolean,
    border?: boolean,

    onStateChange?(isSelected: boolean): void,
}

const FilterButton = (props: IFilterButton) => {

    const styles = styleGenerator();
    const {elevation, title, iconName, invert, border} = props;

    const [isSelected, toggleButton] = useState(false);

    const handleFilterState = () => {
        toggleButton(!isSelected);
		props.onStateChange ? props.onStateChange(isSelected) : null
	};

    return (
        <View
            style={[styles.container, border && {borderWidth: 1.2}, border && isSelected ? {borderColor: Colors.whiteBall} : {borderColor: Colors.primaryPurple}, invert && {scaleX: -1}, elevation && {elevation: 6}]}>
            <RectButton onPress={handleFilterState}
                        style={[styles.filterButton, isSelected && styles.filterButton_pressed]}>
                <Icon type={'ion'} name={iconName} color={isSelected ? Colors.whiteBall : Colors.primaryPurple}
                      size={20}/>
                <Text style={[styles.filterButton_text, isSelected && styles.filterButton_text_pressed]}>
                    {title}
                </Text>
            </RectButton>
        </View>
    );
};

export default observer(FilterButton);
