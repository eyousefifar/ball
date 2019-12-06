import React from 'react';
import {View, Text } from 'react-native';
import {observer} from 'mobx-react-lite';
// styles
import styleGenerator from './styles';
//local
import {Colors, Icon} from "../../../../ball-library";


interface MoreInfoItem {
    name:string | number,
    iconName:string,
    icon_type: 'antDesign' | 'evilIcons' | 'feather' | 'ion' | 'simpleLine' | 'fontAwesome' | 'ball';
    color? : string,
    text_color?: string
}

const MoreInfoItem = (props:MoreInfoItem) => {
    const styles = styleGenerator();
    const {name, iconName, color, icon_type, text_color} = props;

    return (
        <View style={styles.more_info}>
            <Text style={[styles.more_info_text, text_color ? {color: text_color} : {color:Colors.grayBall}]}>{name}</Text>
            <Icon type={icon_type} name={iconName} color={color ? color : Colors.grayBall} size={12} />
        </View>
    )
};

export default observer(MoreInfoItem);

