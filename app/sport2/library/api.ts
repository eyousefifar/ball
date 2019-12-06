import {IVerifyResponse, LikeRes, SportPageResponse, TicketRes} from "./types";
import {baseUrl} from '../../ball-library'


export const getSportPage = async (id: string): Promise<IVerifyResponse> => {
	try {
		let response = await fetch(`${baseUrl}/api/sportSites/${id}/page`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		let responseJson: SportPageResponse = await response.json();

		console.warn('ProviderPage : ',responseJson)

		if (response.status === 200) {
			return {
				state: "success",
				message: 'No Error',
				responseJson: responseJson
			}
		}
		if (response.status === 404) {
			return {
				state: "failed",
				message: 'Not Found',
				responseJson: null
			}
		}
		if (response.status === 500) {
			return {
				state: 'failed',
				message: 'Server Error',
				responseJson: null
			}
		}

	} catch (e) {
		console.warn(e.toString());
		return {
			state: 'failed',
			message: e.toString(),
			responseJson: null
		}
	}
};

export const isLikedUser = async (sportId: string, token: string): Promise<LikeRes> => {
	try {
		let response = await fetch(`${baseUrl}/api/sportSites/${sportId}/like`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
		});
		let responseJson = await response.json();

		console.warn('Like Response : ', responseJson);

		if (response.status === 200) {
			return {
				state: 'success',
				likeId: responseJson.uuid
			}
		} else {
			return {
				state: 'failed',
				likeId: ''
			}
		}

	} catch (e) {
		console.warn(e.toString());
		return {
			state: 'failed',
			likeId: ''
		}
	}
};

export const likeSport = async (sportId: string, token: string): Promise<LikeRes> => {
	try {
		let response = await fetch(`${baseUrl}/api/sportSites/likes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				sportSiteUUID: sportId,
			}),
		});
		let responseJson = await response.json();
		// console.warn(responseJson);

		if (response.status === 201) {
			return {
				state: 'success',
				likeId: responseJson.uuid
			}
		} else {
			// Server Error 500
			return {
				state: 'failed',
				likeId: ''
			}
		}


	} catch (e) {
		console.warn(e.toString());
		return {
			state: 'failed',
			likeId: ''
		}
	}
};


export const removeLike = async (likeId: string, token: string): Promise<boolean> => {
	try {
		let response = await fetch(`${baseUrl}/api/sportSites/likes/${likeId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
		});
		// let responseJson = await response.json();

		return response.status === 200;


	} catch (e) {
		console.warn(e.toString());
		return false
	}
};


export const makeTicket = async (sportId: string, token: string): Promise<TicketRes> => {
	try {
		let response = await fetch(`${baseUrl}/api/sportSites/supportTickets`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				sportSiteUUID: sportId,
			}),
		});
		let responseJson = await response.json();

		// console.warn(responseJson);

		if (response.status === 201) {
			return {
				state: 'success',
				ticketId: responseJson.uuid
			}
		} else {
			return {
				state: 'failed',
				ticketId: ''
			}
		}

	} catch (e) {
		console.warn(e.toString());
		return {
			state: 'failed',
			ticketId: ''
		}
	}
};
