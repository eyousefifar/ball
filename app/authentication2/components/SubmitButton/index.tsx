import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles'
import {Colors} from "../../../ball-library/theme";


interface ISubmitButton {
    onClick: () => void,
    label: string,
    loading: boolean
}

const SubmitButton = (props: ISubmitButton) => {

    const styles = styleGenerator();
    const {label, onClick, loading} = props;

    return (
        <RectButton style={styles.container} onPress={onClick}>
            {!loading &&
            <Text style={styles.submit_text}>{label}</Text>
            }
            {loading &&
            <ActivityIndicator size={'small'} color={Colors.whiteBall}/>
            }
        </RectButton>
    );
};

export default observer(SubmitButton);
