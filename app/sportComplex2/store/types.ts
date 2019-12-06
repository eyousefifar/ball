import {ImageSourcePropType} from "react-native";

export interface SportComplexCarouselItem {
	id: number,
	color: string,
	footer_text: string | null
}

export interface ISportCategory {
	id: number,
	name: string,
	image: ImageSourcePropType,
	address: string,
	score: number,
	price: number,
	discount?: number | null
}

export interface ISportCarouselItem {
	id:number,
	color:string,
	image:ImageSourcePropType,
	footer_text:string | null
}
