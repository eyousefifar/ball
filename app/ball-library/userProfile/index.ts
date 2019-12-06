import AsyncStorage from '@react-native-community/async-storage';
import {observable, action, decorate, computed} from 'mobx';
import auth from "../auth";
import {sendPushID} from "./api";


class UserProfile {
    // observables
    imageProfileUrl: string = 'ballImageUrl';
    userName: string = 'ballUserName';
    phoneNumber: string = 'ballPhoneNumber';
    pushID: string = '';


    get hasImageProfile(): boolean {
        return this.imageProfileUrl != 'ballImageUrl';
    }

    get hasPushID(): boolean {
        return this.pushID != '';
    }

    // getter for user info to keep direct changes
    getImageProfileUrl = () => {
        return this.imageProfileUrl
    };
    getUserName = () => {
        return this.userName
    };
    getPhoneNumber = () => {
        return this.phoneNumber
    };

    // Getters
    getAllUserInfo = async () => {
        try {
            const imageProfileUrl = await AsyncStorage.getItem('user_image_url');
            const userName = await AsyncStorage.getItem('user_name');
            const userPhoneNumber = await AsyncStorage.getItem('user_phoneNumber');
            // console.warn('UserInfo : ', `${imageProfileUrl} + ${userName} + ${userPhoneNumber}` )

            if (imageProfileUrl !== null) {
                this.imageProfileUrl = imageProfileUrl
            }
            if (userName !== null) {
                this.userName = userName
            }
            if (userPhoneNumber !== null) {
                this.phoneNumber = userPhoneNumber
            }

        } catch (e) {
            // error reading value
        }
    };
    getUserNameFromDb = async () => {
        try {
            const userName = await AsyncStorage.getItem('user_name');
            if (userName !== null) {
                this.userName = userName
            }
        } catch (e) {
            // error reading value
        }
    };

    // Setter functions to save in Database
    setImageProfileUrl = async (imageUrl: string | null) => {
        if (imageUrl !== null) {
            try {
                await AsyncStorage.setItem('user_image_url', imageUrl);
            } catch (err) {
                // log
            }
        }
    };
    setUserName = async (userName: string) => {
        try {
            await AsyncStorage.setItem('user_name', userName);
        } catch (err) {
            // log
        }
    };
    setPhoneNumber = async (phoneNumber: string) => {
        try {
            await AsyncStorage.setItem('user_phoneNumber', phoneNumber);
        } catch (err) {
            // log
        }
    };

    setAllProfile = async (imageUrl: string | null, userName: string, phoneNumber: string) => {
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        if (imageUrl !== null) {
            this.imageProfileUrl = imageUrl
        }
    };
    setImageProfile = async (imageUrl: string) => {
        this.imageProfileUrl = imageUrl
    };
    setPushID = async (pushID: string) => {
        this.pushID = pushID
    };

    // JSON.parse(intro)

    checkFirstTime = async (pushID: string) => {
        try {
            const firstTime = await AsyncStorage.getItem('firstTime');

            // console.warn('First Time : ', firstTime);

            if (firstTime === undefined || firstTime === null) {
                let res = await sendPushID(pushID);

                if (res.state === 'success') {
                    // Save in DB that user in
                    try {
                        await AsyncStorage.setItem('firstTime', JSON.stringify(false));
                        console.warn('Saved To Db ')
                    } catch (err) {
                        // log
                    }

                }

            }
        } catch (e) {
            // error reading value
        }
    };


    logout = async () => {
        await this.setImageProfileUrl('ballImageUrl');
        await this.setUserName('ballUserName');
        await this.setPhoneNumber('ballPhoneNumber');
        // TODO : Delete All Items From AsyncStorage
        // TODO : Logout from server
        await auth.logout()
    };
    profileCheck = async () => {
        await this.getAllUserInfo()
    };
}

decorate(UserProfile, {
    imageProfileUrl: observable,
    userName: observable,
    phoneNumber: observable,
    pushID: observable,

    hasImageProfile: computed,
    hasPushID: computed,

    setImageProfileUrl: action,
    setUserName: action,
    setPhoneNumber: action,

    getAllUserInfo: action,
    getUserNameFromDb: action,

    setAllProfile: action,
    setImageProfile: action,
    setPushID: action

});

const userProfile = new UserProfile();

export default userProfile;
