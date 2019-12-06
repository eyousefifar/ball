export interface ChatItem {
	id:number,
	sender:'customer' | 'provider',
	message:string,
}

export interface IChatListSection {
	id:number,
	date:string,
	chats:Array<ChatItem>
}
