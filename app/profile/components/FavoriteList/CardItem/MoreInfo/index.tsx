import React from 'react';
import {View, Text } from 'react-native';
import {observer} from 'mobx-react-lite';
// styles
import styleGenerator from './styles';
//local
import {Colors, Icon} from "../../../../../ball-library";


interface MoreInfoItem {
    name:string | number,
    iconName:string,
    icon_type: "antDesign" | "evilIcons" | "feather" | "ion" | "simpleLine" | "ball",
    color? : string,
    text_color?: string
}

const MoreInfoItem = (props:MoreInfoItem) => {
    const styles = styleGenerator();

    return (
        <View style={styles.more_info}>
            <Text style={[styles.more_info_text, props.text_color ? {color: props.text_color} : {color:Colors.grayBall}]}>{props.name}</Text>
            <Icon type={props.icon_type} name={props.iconName} color={props.color ? props.color : Colors.grayBall} size={12} />
        </View>
    )
};

export default observer(MoreInfoItem);

