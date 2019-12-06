
export interface SansesRes {
	state: 'success' | 'failed',
	sanses: Array<SansList>
}

export interface SansList {
	uuid:string,
	startTime:string,
	endTime:string,
	sportSiteUUID:string,
	sessions:Array<Sans>
}

export interface Sans {
	uuid: string,
	// reserveType: 'multi' | 'single';
	capacity:number,
	price: number,
	discountPrecent: number,
	sportType: string,
	reserveLimit: number,
	date:string
}

export interface ReservedSans {
	uuid:string,
	price: number,
	discount: number,
	name: string,
	amount:number,
	date:string
}


