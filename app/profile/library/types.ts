interface IVerifyResponse {
    state: 'success' | 'failed',
    message: string
}

interface ProfileLikesRes {
    state: 'success' | 'failed',
    message:string,
    sports:Array<Sport>
}

interface Sport {
    uuid: string,
    sportSite: {
        uuid: string,
        name: string,

        rateCount: number,
        rateAvg: number,
        maxDiscountPrecent: number,
        minPrice: number,

        mainPicUrl: string,
    }
}
