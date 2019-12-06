export interface SearchRes {
    state: 'success' | 'failed',
    message: string,
    searchResult: Array<SearchItem>
}


export interface SearchItem {
    uuid: string,
    name: string,
    tel: Array<string>,
    description: string,
    type: string,
    sportTypes: Array<string>,
    genderTypes: Array<string>,
    rateCount: number,
    rateAvg: number,
    maxDiscountPrecent: number,
    minPrice: number,
    mainPicUrl: string,
    enableStatus: boolean,
    sportSiteComplexUUID: null,
    address: {
        city: string,
        area: string,
        descriptiveAddress: string,
        coordinateAddress: Array<number>,
    }
}
