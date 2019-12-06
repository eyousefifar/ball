import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {Title, Headline, Caption} from 'react-native-paper';
// styles
import styles from './styles';

interface ITimer {
    minimumTime: string,
}

const Timer = (props: ITimer) => {
    // @ts-ignore
    const Colon = style => <Text style={[style, styles.colon]}>{':'}</Text>;

    const {minimumTime} = props;
    const Time = minimumTime.split(':');
    const day = Time[0];
    const hour = Time[1];
    const minute = Time[2];


    const TimeName = (name: string) => (
        <Text style={styles.timeName}>{name}</Text>
    );
    return (
        <>
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <Text style={styles.blue}>{day}</Text>
                </View>
                {Colon(styles.deepPurple)}
                <View style={styles.timeContainer}>
                    <Text style={styles.deepPurple}>{hour}</Text>
                </View>
                {Colon(styles.purple)}
                <View style={styles.timeContainer}>
                    <Text style={styles.purple}>{minute}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.timeContainer}>{TimeName('روز')}</View>
                <View style={styles.timeContainer}>{TimeName('ساعت')}</View>
                <View style={styles.timeContainer}>{TimeName('دقیقه')}</View>
            </View>
        </>
    );
};

export default observer(Timer);
