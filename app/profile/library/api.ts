import {baseUrl, userProfile} from "../../ball-library";




export const editProfile = async (token: string, name: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/customers`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userObj: {
                    name: name
                },
                bodyInfo: {
                    age: 22
                }
            }),
        });
        let responseJson = await response.json();

        console.warn(responseJson);

        if (response.status === 200) {
            return {
                state: 'success',
                message: 'Profile Has Edited Successfully'
            }
        } else {
            // TODO : get 500  error Or Unique name Error
            return {
                state: 'failed',
                message: 'Profile Not Edited & Server Error'
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString()
        }
    }
};

export const uploadImageProfile = async (token: string, imagePath: string, type: string): Promise<IVerifyResponse> => {

    let formData = new FormData();

    formData.append('file', {
        uri: imagePath,
        name: `photo.${type}`,
        filename: `imageName.${type}`,
        type: `image/${type}`
    });

    try {
        let response = await fetch(`${baseUrl}/api/users/media`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        let responseJson = await response.json();

        console.warn('Upload Response : ', responseJson);

        switch (response.status) {
            case 200:
                console.warn('destFileUrl : ',responseJson.destFileUrl);
                await userProfile.setImageProfile(responseJson.destFileUrl);
                userProfile.setImageProfileUrl(responseJson.destFileUrl);
                return {
                    state: 'success',
                    message: 'آپلود شد'
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString()
        }
    }
};

export const getFavoriteSports = async (token: string): Promise<ProfileLikesRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/customers/likes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        let responseJson = await response.json();

        console.warn('UserLikes Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'آپلود شد',
                    sports: responseJson
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید',
                    sports: []
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته',
                    sports: []
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString()
        }
    }
};


