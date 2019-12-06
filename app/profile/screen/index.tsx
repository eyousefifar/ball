import React, {useEffect, useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Provider} from 'react-native-paper';
import {defaultTheme, TitleBar, Header, auth, screens} from '../../ball-library';
import {observer} from 'mobx-react';
// styles
// local
import Background from '../components/Background';
import FavoriteList from '../components/FavoriteList';
import InfoCard from '../components/InfoCard';
import {dismissProfileScreen} from '../library/nav';
import {favoritesStore} from '../store/FavoritesStore'
import {getFavoriteSports} from "../library/api";
import Loading from "../../ball-library/Loading";

interface IProfile {
    mode: 'edit' | 'normal';
}

const Profile = (props: IProfile) => {
    const {mode} = props;

    const [loading, setLoading] = useState<boolean>(false);
    const [sports, setSports] = useState<Array<Sport>>([]);


    const firstLaunch = async () => {
        let res = await getFavoriteSports(auth.getToken());

        if (res.state === 'success') {
            setSports(res.sports);
            setLoading(true)

        } else {
            ToastAndroid.show(res.message, ToastAndroid.SHORT);
            setLoading(true)
        }
    };

    useEffect(() => {
        firstLaunch()
    },[]);


    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={loading} screenId={screens.profile.id}>
                <View style={{flex: 1}}>
                    <Header
                        title={'پروفایل'}
                        mode={'fullWidth'}
                        drawBehind
                        onPress={dismissProfileScreen}
                    />
                    <View style={{flex: 1}}>
                        <Background/>
                        <KeyboardAwareScrollView
                            style={{flex: 1}}
                            enableOnAndroid
                            extraHeight={64}
                            keyboardShouldPersistTaps={'handled'}>
                            <InfoCard mode={mode}/>
                            <TitleBar title={'علاقه مندی ها'}/>
                            <FavoriteList reserved={sports}/>
                        </KeyboardAwareScrollView>
                    </View>
                </View>
            </Loading>
        </Provider>
    );

};

export default observer(Profile);
