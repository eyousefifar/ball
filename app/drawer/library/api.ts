import {baseUrl} from "../../ball-library/network";

interface LogoutRes {
    state:'success' | 'failed',
    message:string
}

export const logoutServer = async (token:string): Promise<LogoutRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`${token}`
            },
        });
        // let responseJson  = await response.json();

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'از حساب خود خارج شدید'
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
            message: 'خطای اتصال به اینترنت',
        }
    }
};
