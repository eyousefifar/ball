import {ImageSourcePropType} from "react-native";

export interface HomeRes {
    state:'success' | 'failed',
    sportLists : Array<HomeSportList>,
    banners:Array<string>,
    message:string
}

export interface HomeSportList {
    title: string,
    odataStr: string,
    data: Array<HomeSport>
}

export interface HomeSport {
    uuid: string,
    name: string,

    rateCount: 0,
    rateAvg: 0,

    address: {
        area: string
    },

    maxDiscountPrecent: number,
    minPrice: number,
    mainPicUrl: string,
}

export interface ICarouselItem {
    uuid:string,
    image:string,
    footerText:string
}
