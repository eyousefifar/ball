export interface ChatsRes {
	state: 'success' | 'failed',
	chats: Array<ChatItem>,
}

export interface ChatSendRes {
	state: 'success' | 'failed',
	message:string
}

export interface ChatItem {
	uuid:string,
	text:string,
	userType:'customer'| 'provider',
	profilePicUrl:string | null
}
