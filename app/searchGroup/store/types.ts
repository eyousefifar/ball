import { ImageSourcePropType} from "react-native";

export interface Sport {
	id: number,
	image: ImageSourcePropType,
	discount?: number | null,
	name: string,
	address: string,
	score: number,
	price: number
}


export interface ISportList {
	items : Array<Sport>
}
