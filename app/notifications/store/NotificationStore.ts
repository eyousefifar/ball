import {Notification} from "./types";
import {decorate, computed, observable} from "mobx";

class NotificationStore {
	notifications: Array<Notification> = [
		{
			id: 1,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 2,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 3,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 4,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 5,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 6,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 7,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
		{
			id: 8,
			date: 'پنج روز پیش',
			message: 'پیامی از طرف بال',
			type: 'Karting'
		},
	];

	public get getNotifications(): Array<Notification> {
		return this.notifications;
	}
}

decorate(NotificationStore, {
	notifications: observable,

	getNotifications: computed
});

export const notificationStore = new NotificationStore();
