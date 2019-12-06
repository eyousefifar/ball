import {StyleSheet} from 'react-native';

export default () => {
    return StyleSheet.create({
        horizontal_lists: {
            transform: [{rotateY: '180deg'}],
        }
    });
};
