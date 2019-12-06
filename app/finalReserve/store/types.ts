export interface FakeReserve {
	price:number,
	reservedItems:Array<IReserveItem>,
	day:string,
	date:string,
	time:{
		start_time:string,
		end_time:string
	}
}

export interface IReserveItem {
	name:string,
	count:number
}


export interface IReserveCard {
	reserveId: number;
	reserveType: 'multi' | 'single';
	reserveTitle: string;
	price: number;
	discount?: number;
	limit: number;
}

export interface ReservationList {
	timestamp: {
		startsAt: string;
		endsAt: string;
	};
	data: Array<IReserveCard>;
}

export interface ISelectedReserves {
	[id: number]: | { amount: number, price: number,discount:number, name:string} | undefined;
}

export interface ReserveItemServer {
	sportSiteSessionUUID:string,
	count:number,
}
