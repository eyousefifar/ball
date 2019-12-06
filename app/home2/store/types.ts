import {ImageSourcePropType} from "react-native";

export interface ICarouselItem {
    id:number,
    color:string,
    image:ImageSourcePropType
    footer_text:string
}

export interface Sport {
    id:number,
    image: ImageSourcePropType,
    discount? :number | null,
    name:string,
    address:string,
    score:number,
    price:number
}

export interface HomeList {
    header_text : string,
    sports:Array<Sport>
}
