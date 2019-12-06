import {ImageSourcePropType} from "react-native";

export interface ISupportsList {
	items : Array<ISupportCard>
}

export interface ISupportCard {
	id: number,
	name: string,
	image: ImageSourcePropType,
	isBallSupport?:boolean,
	address?: string,
	score?: number,
	new_message?:number
}
