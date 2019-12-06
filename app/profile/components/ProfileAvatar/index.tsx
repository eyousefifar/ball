import React, {useEffect, useState} from 'react';
import {View, Image, Alert, ToastAndroid} from 'react-native';
import ImagePicker, {
    Image as ImageInterface
} from 'react-native-image-crop-picker';
import {observer} from 'mobx-react-lite';
import {Icon, Colors, auth, userProfile, screens} from '../../../ball-library';

import {BorderlessButton} from 'react-native-gesture-handler';

//style
import styleGenerator from './styles';
//store

// types
import {getFavoriteSports, uploadImageProfile} from "../../library/api";
import Loading from "../../../ball-library/Loading";
import {Provider} from "react-native-paper";


const ProfileImage = () => {
    const {styles, borderRadius, rippleColor} = styleGenerator();
    const [profileImage, setProfileImage] = useState('https://cdn01.zoomit.ir/2019/6/ae978b0c-e7e1-4ade-a04b-b24ca1556d87.jpg');


    useEffect(() => {
        if (userProfile.hasImageProfile) {
            setProfileImage(userProfile.getImageProfileUrl());
        }
    }, []);


    const onImageError = () => {
        Alert.alert('عکس انتخاب نشد', 'لطفا دوباره تلاش کنید', [
            {
                onPress: () => {
                },
                style: 'cancel',
                text: 'لغو'
            },
            {
                onPress: () => {
                    onImagePress();
                },
                style: 'default',
                text: 'تلاش دوباره'
            }
        ]);
    };
    const onImagePress = async () => {
        try {
            const image: ImageInterface = await ImagePicker.openPicker({
                width: 256,
                height: 256,
                cropping: true,
                cropperActiveWidgetColor: Colors.primaryPurple,
                cropperStatusBarColor: Colors.primaryPurple,
                cropperToolbarColor: Colors.primaryPurple,
                cropperToolbarTitle: 'ویرایش عکس',
                cropperCircleOverlay: true,
                loadingLabelText: 'در حال پردازش',
                mediaType: 'photo',
                multiple: false,
                includeBase64: true,
                includeExif: true
            });
            if (image.data) {
                setProfileImage(`data:image/png;base64,:${image.data}`);
                const imageType = image.mime.split('/');
                await uploadImageProfile(auth.getToken(), image.path, imageType[1])
            } else {
                onImageError();
            }
        } catch (err) {
            onImageError();
        }
    };
    return (
        <View style={styles.container}>
            <BorderlessButton onPress={onImagePress} rippleColor={rippleColor}>
                <View style={styles.profileImageContainer} pointerEvents={'box-only'}>
                    <Image
                        source={{
                            uri: profileImage
                        }}
                        style={styles.avatar}
                        borderRadius={borderRadius}
                    />

                    <View style={styles.iconContainer}>
                        <Icon
                            type={'ball'}
                            name={'camera'}
                            color={'white'}
                            size={(14)}
                        />
                    </View>
                </View>
            </BorderlessButton>
        </View>
    );
};

export default observer(ProfileImage);
