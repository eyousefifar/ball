import {ChatSendRes, ChatsRes} from "./types";
import {baseUrl} from "../../ball-library";

export const getAllChats = async (sportTicketId: string, token: string): Promise<ChatsRes> => {
    try {
        console.warn('SportTicketId', sportTicketId);

        let response = await fetch(`${baseUrl}/api/sportSites/supportTickets/${sportTicketId}/comments`, {
            // let response = await fetch(`${baseUrl}/api/sportSites/supportTickets/a2e02f7c-8202-4e92-b1da-39638c3fdb8d/comments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson = await response.json();

        console.warn('Chat Response : ', responseJson);

        if (response.status === 200) {
            return {
                state: 'success',
                chats: responseJson
            }
        } else {
            // Server Error 500
            return {
                state: 'failed',
                chats: []
            }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            chats: []
        }
    }
};


export const sendChatToServer = async (sportTicketId: string, text: string, token: string): Promise<ChatSendRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/supportTickets/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                text: text,
                sportSiteSupportTicketUUID: sportTicketId,
            }),
        });
        let responseJson = await response.json();

        console.warn(responseJson);

        switch (response.status) {
            case 201 :
                return {
                    state: 'success',
                    message: 'با موفقیت ارسال شد'
                };
            case 500 :
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
			default:
				return {
					state: 'failed',
					message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
				}
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت'
        }
    }
};
