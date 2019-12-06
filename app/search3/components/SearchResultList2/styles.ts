import {StyleSheet} from 'react-native';

export default () => {
    const styles = StyleSheet.create({

        container: {
            width: '100%',
            height: '70%',
        },
        result_list: {
            width: '100%',
            height:'50%',
            flexGrow: 1,
            paddingHorizontal: 2,
            marginBottom:8,
        }

    });

    return {styles};
};
