import React, {useState} from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {observer} from 'mobx-react';
import {Paragraph} from 'react-native-paper';
// styles
import styleGenerator from './styles';
//local

interface ISwitch {
    border?: boolean,
    onChangeSwitch?(state: 'مرد' | 'زن'): void,
}

const Switch = (props: ISwitch) => {
    const {styles, lightGray} = styleGenerator();
    const {border} = props;

    const [state, setState] = useState<'male' | 'female'>('male');

    const onMalePress = () => {
        setState('male');
        // console.warn('Toggle Male Called ')
        props.onChangeSwitch ? props.onChangeSwitch('مرد') : null
    };

    const onFemalePress = () => {
        setState('female');
        // console.warn('Toggle Female Called ')
        props.onChangeSwitch ? props.onChangeSwitch('زن') : null
    };

    return (
        <View style={[styles.container, border && {borderWidth: 0.6, backgroundColor: 'rgba(0,0,0,0.6)'}]}>
            <RectButton
                onPress={onMalePress}
                rippleColor={lightGray}
                style={[styles.switch, state === 'male' && styles.maleBackground]}>
                <Paragraph style={state === 'male' && styles.selectedText}>
                    {'آقایان'}
                </Paragraph>
            </RectButton>
            <RectButton
                onPress={onFemalePress}
                rippleColor={lightGray}
                style={[styles.switch, state === 'female' && styles.femaleBackground]}>
                <Paragraph style={state === 'female' && styles.selectedText}>
                    {'بانوان'}
                </Paragraph>
            </RectButton>
        </View>


    );
};

// export default Switch;
export default observer(Switch)
