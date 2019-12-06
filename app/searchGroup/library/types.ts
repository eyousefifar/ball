export interface SportGroupRes {
    state:'success' | 'failed',
    sportLists : Array<HomeSport>,
    message:string
}

export interface HomeSport {
    uuid: string,
    name: string,
    type: string,
    rateCount: number,
    rateAvg: number,
    maxDiscountPrecent: number,
    minPrice: number,
    mainPicUrl: string,
    address: {
        area: string,
        descriptiveAddress: string,
    }
}
