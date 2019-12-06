import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';

interface ITimer {
    // seconds:string,
    minutes: string
}

const Timer = (props: ITimer) => {

    const styles = styleGenerator();
    const {minutes} = props;

    const [minute, setMinute] = useState<string>(minutes);
    const [second, setSecond] = useState<string>('59');

    useEffect(() => {
        let myInterval = setInterval(() => {

            let numSecond = parseInt(second);
            if (numSecond === 0) {
                let numMinute = parseInt(minute);

                if (numMinute > 0) {
                    numMinute = numMinute - 1;
                    setMinute(numMinute.toString().length === 1 ? '0' + numMinute.toString() : numMinute.toString());
                    setSecond('60');
                    numSecond = 60;
                }
            }

            if (numSecond > 0) {
                numSecond = numSecond - 1;
                setSecond(numSecond.toString().length === 1 ? '0' + numSecond.toString() : numSecond.toString())
            }

        }, 1000);
        return () => {
            clearInterval(myInterval)
        }
    });

    return (
        <Text style={styles.timer}>ارسال مجدد پس از {minute}:{second}</Text>
    );
};

export default observer(Timer);
