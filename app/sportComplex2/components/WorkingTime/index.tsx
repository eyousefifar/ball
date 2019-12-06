import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {Colors} from "../../../ball-library/theme";

const WorkingTime = () => {

    const styles = styleGenerator();

    return (
        <View style={styles.container}>

            <View style={styles.reserve_time_section}>

                <View style={styles.header_container}>
                    <Text style={styles.header_text}>سانس آقایان :</Text>
                </View>
                <View style={styles.days_time}>
                    <Text style={styles.days_time_text}>شنبه تا پنج شنبه</Text>
                    <Text style={styles.days_time_text}>8 - 22</Text>
                </View>
                <View style={styles.days_time}>
                    <Text style={styles.days_time_text}>جمعه</Text>
                    <Text style={styles.days_time_text}>22 - 24</Text>
                </View>


            </View>

            <View style={styles.vertical_separator}/>

            <View style={styles.reserve_time_section}>

                <View style={styles.header_container}>
                    <Text style={[styles.header_text, {color: Colors.femalePink}]}>سانس بانوان :</Text>
                </View>
                <View style={styles.days_time}>
                    <Text style={[styles.days_time_text, {color: Colors.femalePink}]}>شنبه تا پنج شنبه</Text>
                    <Text style={[styles.days_time_text, {color: Colors.femalePink}]}>8 - 22</Text>
                </View>
                <View style={styles.days_time}>
                    <Text style={[styles.days_time_text, {color: Colors.femalePink}]}>جمعه</Text>
                    <Text style={[styles.days_time_text, {color: Colors.femalePink}]}>22 - 24</Text>
                </View>

            </View>

        </View>
    );
};

export default observer(WorkingTime);
