import {baseUrl} from "../../ball-library/network";

export interface IVerifyResponse {
    state: 'success' | 'failed',
    message: string,
    comments: Array<IComment> | null
}

export interface IResponse {
    state: 'success' | 'failed',
    message: string
}

// TODO => Add some properties
export interface IComment {
    uuid: string,
    text: string,
    confirmStatus: boolean,
    hasRepliedComments: boolean,
    userType: 'customer' | 'provider',
    userUUID: string,
    createdAt: string,
}

export const getAllComments = async (sportId: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/${sportId}/comments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let responseJson = await response.json();

        console.warn(responseJson);

        if (response.status === 200) {
            return {
                state: 'success',
                message: 'All Comments Successful',
                comments: responseJson
            }
        } else {
            // TODO : get 500  error
            return {
                state: 'failed',
                message: 'Server Error',
                comments: null
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: e.toString(),
            comments: null
        }
    }
};

export const postComment = async (token: string, sportId: string, sportType: string, rate1: number, rate2: number, rate3: number, rate4: number, rate5: number): Promise<IResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/rates`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                sportSiteType: sportType,
                sportSiteRateObj: {
                    sportSiteUUID: sportId,
                },
                sportSiteRateItemObjs: [
                    {
                        itemName: 'نظافت مجموعه',
                        rateAmount: rate1
                    },
                    {
                        itemName: 'کیفیت سرویس دهی و امکانات',
                        rateAmount: rate2
                    },
                    {
                        itemName: 'رفتار پرسنل',
                        rateAmount: rate3
                    },
                    {
                        itemName: 'دسترسی به محل',
                        rateAmount: rate4
                    },
                    {
                        itemName: 'نسبت قیمت به کیفیت',
                        rateAmount: rate5
                    }
                ]
            }),

        });
        let responseJson = await response.json();

        console.warn(responseJson);

        if (response.status === 201) {
            return {
                state: 'success',
                message: 'Successfully'
            }
        } else if (response.status === 409) {
            return {
                state: 'failed',
                message: 'فقط یک مرتبه می توانید نظر بدهید'
            }
        } else {
            // TODO : get 500  error
            return {
                state: 'failed',
                message: 'Server Error probably'
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

export const postCommentText = async (token: string, text: string, sportId: string): Promise<IResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                text: text,
                sportSiteUUID: sportId,
                replyCommentId: null
            }),

        });
        let responseJson = await response.json();

        console.warn(responseJson);

        if (response.status === 201) {
            return {
                state: 'success',
                message: 'Successfully'
            }
        } else if (response.status === 409) {
            return {
                state: 'failed',
                message: 'فقط یک مرتبه می توانید نظر بدهید'
            }
        } else {
            // TODO : get 500  error
            return {
                state: 'failed',
                message: 'Server Error probably'
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
