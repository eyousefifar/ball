import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
//local
import {supportListStore} from '../../../../store/SupportStore'
import {Colors, Icon} from "../../../../../ball-library";
// styles
import styleGenerator from './styles';

interface IListData {
    // row: number,
    // section: number,
    address:string,
    name:string,

}

const MoreInfoSearchResult = (props: IListData) => {
    // const items = supportListStore.getSupportListFull[props.section].items[props.row];

    const styles = styleGenerator();
    const {name,address} = props;

    return (
        <View style={styles.more_info_container}>
            <Text style={[styles.card_name, {/*items.isBallSupport && {color: Colors.primaryPurple}*/}]}>{name}</Text>
            <View style={styles.more_info_section}>

                {/*Address section*/}
                {
                    address != null &&
                    <View style={styles.address_section}>
                        <Icon type={'simpleLine'} size={10} color={Colors.grayBall} name={'location-pin'}/>
                        <Text style={styles.address_section_text}>{address}</Text>
                    </View>
                }
                {/*{
                    items.address === null &&
                    <View style={styles.address_section}>
                        <Icon type={'simpleLine'} size={10} color={Colors.grayBall} name={'location-pin'}/>
                        <Text style={styles.address_section_text}>vksjdnkls</Text>
                    </View>
                }*/}


                {/*New Message Section*/}
                <View style={styles.new_message_section}>
                   {/* {
                        items.new_message === null &&
                        <Text style={styles.new_message_text}> </Text>
                    }*/}
                    {/*
                        items.new_message != null &&
                        <Text style={styles.new_message_text}>{items.new_message} پیام جدید</Text>
                    */}
                </View>
            </View>
        </View>

    );
};

export default observer(MoreInfoSearchResult);
