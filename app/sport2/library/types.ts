export interface IVerifyResponse {
	state: 'success' | 'failed',
	message: string,
	responseJson:SportPageResponse | null
}
export interface SportPageResponse {
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
	mainPicUrl: null,
	userUUID: string,
	sportSiteComplexUUID: string |null,
	medias: [],
	workPlans: Array<WorkPlan>,
	address: {
		city: string,
		area: string,
		descriptiveAddress: string,
		coordinateAddress: [
			-9.5398,
			-114.2064
		],
	},
	rateItems: []
}
export interface WorkPlan {
	// uuid: string,
	startDay: string,
	endDay:string,
	day: string,
	startTime: string,
	endTime: string,
	// genderType: string,
	// sportSiteUUID: string,
	// createdAt: string,
	// updatedAt: string
}

export interface LikeRes {
	state: 'success' | 'failed',
	likeId: string ,
}
export interface TicketRes {
	state: 'success' | 'failed',
	ticketId: string,
}

