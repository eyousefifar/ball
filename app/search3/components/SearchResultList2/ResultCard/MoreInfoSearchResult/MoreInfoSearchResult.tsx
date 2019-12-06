import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {Colors, Icon} from "../../../../../ball-library";
// styles
import styleGenerator from './styles';
//local

interface IListData {
    name:string,
    location:string,
    score:number,
    price:number,
}

const MoreInfoSearchResult = (props: IListData) => {
    const styles = styleGenerator();
    
    const {name,location,score,price} = props;

    return (
        <View style={styles.more_info_container}>
            <Text style={styles.card_name}>{name}</Text>
            <View style={styles.more_info_section}>

                {/*Address section*/}
                <View style={styles.address_section}>
                    <Icon type={'simpleLine'} size={10} color={Colors.grayBall} name={'location-pin'}/>
                    <Text style={styles.address_section_text}>{location}</Text>
                </View>

                {/*Star section*/}
                <View style={styles.star_section}>
                    <Text style={styles.star_section_text}>{score}</Text>
                    <Icon type={'ion'} size={12} color={Colors.grayBall} name={'md-star'}/>
                </View>

            </View>

            {/*Price section*/}
            <View style={styles.price_section}>
                <Text style={styles.price_section_text}>{price}</Text>
                <Icon type={'ion'} size={13} color={Colors.greenBall} name={'md-cash'}/>
            </View>
        </View>

    );
};

export default observer(MoreInfoSearchResult);
