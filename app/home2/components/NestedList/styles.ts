import {StyleSheet} from 'react-native';

export default () => {
    return StyleSheet.create({

        vertical_lists:{
            width:'100%',
            height: 210,
            paddingVertical: 8,

            // backgroundColor:'green'
        },

        horizontal_lists: {
            transform: [{rotateY: '180deg'}],
        }
    });
};
