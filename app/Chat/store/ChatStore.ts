import {IChatListSection} from "./types";
import {action, computed, decorate, observable} from "mobx";
import {ChatItem} from "../library/types";
import {act} from "react-test-renderer";

class ChatStore {
	chats2: Array<ChatItem> = [
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},
		{
			uuid: '1',
			userType: 'customer',
			text: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است',
			profilePicUrl: null
		},

	];
	chats: Array<ChatItem> = [
		{
			uuid:'dsdasdd',
			userType:'customer',
			text:'سلام من یک متن تستی هستم',
			profilePicUrl:null
		},
		{
			uuid:'dsdasdd',
			userType:'customer',
			text:'سلام من یک متن تستی هستم',
			profilePicUrl:null
		},
	];

	// textBoxAccess: boolean = true;


	chatList: Array<IChatListSection> = [
		{
			id: 1,
			date: 'امروز',
			chats: [
				{
					id: 1,
					sender: 'provider',
					message: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است'
				},
				{
					id: 2,
					sender: 'customer',
					message: 'با عرض سلام بنده سالن خورشید را در تاریخ 12 تیر رزرو کردم اما مثل اینکه سالن خورشید 12 تیر به علت نامعلومی بسته بود \n آیا هزینه رزرو را مرجوع می کنید؟؟'
				},
			]
		},
		{
			id: 2,
			date: 'دیروز',
			chats: [
				{
					id: 1,
					sender: 'provider',
					message: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است'
				},
				{
					id: 2,
					sender: 'customer',
					message: 'با عرض سلام بنده سالن خورشید را در تاریخ 12 تیر رزرو کردم اما مثل اینکه سالن خورشید 12 تیر به علت نامعلومی بسته بود \n آیا هزینه رزرو را مرجوع می کنید؟؟'
				},
			]
		},
		{
			id: 3,
			date: '25 بهمن',
			chats: [
				{
					id: 1,
					sender: 'provider',
					message: 'با سلام خدمت شما کاربر گرامی مشکل شما در حال بررسی است'
				},
				{
					id: 2,
					sender: 'customer',
					message: 'با عرض سلام بنده سالن خورشید را در تاریخ 12 تیر رزرو کردم اما مثل اینکه سالن خورشید 12 تیر به علت نامعلومی بسته بود \n آیا هزینه رزرو را مرجوع می کنید؟؟'
				},
			]
		},
	];

	// get getTextBoxAccessibility(): boolean {
	// 	return this.textBoxAccess
	// }

	get getAllChats(): Array<ChatItem> {
		return this.chats;
	}

	get getAllChatList(): Array<IChatListSection> {
		return this.chatList
	}

	setChats = (chats: Array<ChatItem>) => {
		this.chats = chats;
	};

	addChat = (chat: ChatItem) => {
		// this.chats.push(chat)
		this.chats = [
				chat,
				...this.chats
		]
	}
}

decorate(ChatStore, {
	chats: observable,
	chatList: observable,
	// textBoxAccess:observable,
	getAllChats:computed,

	setChats: action,
	addChat: action,
	// setTextBoxAccess:action
});

export const chatStore = new ChatStore();
