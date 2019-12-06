import {baseUrl} from "../network";

interface DeviceIdRes {
    state: 'success'|'failed',
    message:string

}

export const sendPushID = async (pushID:string): Promise<DeviceIdRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/devices`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceToken:pushID,
                deviceInfo: {},
            }),
        });
        let responseJson = await response.json();

        console.warn('PushID Response : ', responseJson);

        switch (response.status) {
            case 201:
                return {
                    state: 'success',
                    message: 'Send successfully'
                };
            case 409:
                return {
                    state: 'failed',
                    message: 'شناسه باید یکتا باشد چنین شناسه ای از قبل وجود دارد'
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا امتحان کنید'
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        return {
            state: 'failed',
            message: e.toString()
        }
    }
};
