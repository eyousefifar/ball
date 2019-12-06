import {ImageSourcePropType} from "react-native";

export interface ISportCarouselItem {
    id:number,
    color:string,
    image:ImageSourcePropType,
    footer_text:string | null
}

export interface IProgressBar {
    id:number,
    text:string,
    value:number
}
