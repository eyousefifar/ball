export interface IDrawerItem {
	id: string,
	title: string,
	onPress: () => void,
	type: 'plain' | 'itemList' | 'empty',
	item_list_type?: 'reserve' | 'notification'
}


export interface ReserveItem {
	id:number,
	icon_name:sports,
	name:string,
	date:string,
	time:string
}

type sports =
		| 'basketball'
		| 'football'
		| 'futsal'
		| 'Karting'
		| 'paintball'
		| 'Pool'
		| 'Game-room'
		| 'scape-room'
		| 'sport-complex'
		| 'volleyball';

export interface INotificationItem {
	id: number;
	icon_name: sports;
	message: string;
}
