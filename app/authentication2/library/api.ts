import {auth, userProfile, baseUrl} from '../../ball-library';

interface IVerifyResponse {
    state: 'success' | 'failed',
    message: string
}

interface ICheckUserExists {
    state: 'success' | 'failed',
    userExists: boolean,
    message: string
}

export const checkUserExists = async (phone: string): Promise<ICheckUserExists> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/check-user-exist/customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phone,
            }),
        });
        let responseJson = await response.json();


        switch (response.status) {
            case 200:
                return {
                    state: "success",
                    userExists: responseJson,
                    message: 'No Error'
                };
            case 500:
                return {
                    state: "failed",
                    userExists: responseJson,
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    userExists: responseJson,
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
            userExists: false
        }
    }
};

// region SignUp Region
export const sendSmsToUserForSignUp = async (phone: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/phone/verify/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phone,
            }),
        });
        // let responseJson = await response.json();

        switch (response.status) {
            case 200:
                return {
                    state: "success",
                    message: 'No Error'
                };
            case 500:
                return {
                    state: "failed",
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
        }
    }
};

export const verifyPhoneForSignUp = async (phone: string, key: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/phone/verify/callback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phone,
                key: key
            }),
        });
        let responseJson = await response.json();


        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: responseJson.phoneConfirmKey
                };
            case 400:
                console.warn('verify signUp res', responseJson.errs);
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                console.warn('verify signUp res', responseJson);

                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
        }
    }
};

export const signUpCustomer = async (phoneConfirmKey: string, customerName: string, phone: string): Promise<IVerifyResponse> => {
    let body = JSON.stringify('');

    if (userProfile.hasPushID) {
        // console.warn('SignUp PushID : ',userProfile.pushID);

        body = JSON.stringify({
            phoneConfirmKey: phoneConfirmKey,
            deviceToken: userProfile.pushID,
            userObj: {
                name: customerName
            }
        })
    } else {
        body = JSON.stringify({
            phoneConfirmKey: phoneConfirmKey,
            userObj: {
                name: customerName
            }
        })
    }


    try {
        let response = await fetch(`${baseUrl}/api/auth/signup/customer/with-phone`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });
        let responseJson = await response.json();

        console.warn(responseJson);


        switch (response.status) {
            case 201:
                await auth.setToken(responseJson.token);
                await saveUserProfile(null, customerName, phone);
                return {
                    state: 'success',
                    message: 'User Created Successfully'
                };
            case 400:
                console.warn('400 : ', responseJson.errs);
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                console.warn('500 : ', responseJson.errs);
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
        }
    }
};
// endregion

// region Login Region
export const loginCustomerSms = async (phone: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/login/customer/with-phone/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phone,
            }),
        });
        let responseJson = await response.json();

        if (response.status === 200 && responseJson) {
            return {
                state: 'success',
                message: 'Sms has been sent successfully'
            }
        } else {
            return {
                state: 'failed',
                message: 'خطای عدم اتصال به اینترنت'
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای عدم اتصال به اینترنت'
        }
    }
};

export const loginCustomer = async (phone: string, key: string): Promise<IVerifyResponse> => {

    let body = JSON.stringify('');

    if (userProfile.hasPushID) {
        // console.warn('Login PushID : ',userProfile.pushID)
        body = JSON.stringify({
            phone: phone,
            deviceToken: userProfile.pushID,
            key: key
        })
    } else {
        body = JSON.stringify({
            phone: phone,
            key: key
        })
    }


    try {
        let response = await fetch(`${baseUrl}/api/auth/login/with-phone/callback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // TODO : send device push ID
            // deviceToken: device token
            body: body,
        });
        let responseJson = await response.json();

        switch (response.status) {
            case 200:
                await auth.setToken(responseJson.token);
                // request user profile & save user profile
                await getUserInfo(responseJson.token);

                return {
                    state: 'success',
                    message: 'You Logged In Successfully'
                };
            case 400:
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای عدم اتصال به اینترنت'
        }
    }
};

export const getUserInfo = async (token: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        let responseJson = await response.json();

        switch (response.status) {
            case 200:
                let userName = responseJson.name;
                let phone = responseJson.phone;
                let imageProfileUrl = responseJson.profilePicUrl;

                await saveUserProfile(imageProfileUrl, userName, phone);

                return {
                    state: 'success',
                    message: 'You Logged In Successfully'
                };
            case 400:
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message:  'خطای عدم اتصال به اینترنت'
        }
    }
};
// endregion

export const saveUserProfile = async (imageUrl: string | null, userName: string, phoneNumber: string) => {
    await userProfile.setAllProfile(imageUrl, userName, phoneNumber);

    await userProfile.setImageProfileUrl(imageUrl);
    await userProfile.setUserName(userName);
    await userProfile.setPhoneNumber(phoneNumber);
};
