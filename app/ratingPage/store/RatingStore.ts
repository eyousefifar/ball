import {Comment, Rate} from "./types";
import {computed, decorate, observable} from "mobx";

class RatingStore {
	comments: Array<Comment> = [
		{
			id: 1,
			avatar: 'md-contact',
			score: 5,
			user_name: 'نام کاربر',
			comment_content: 'عالی ، از تمام خدمات راضی بودم \n تنها مشکلی که دیدم این بود که تعداد حمام های مجموعه کم بود'
		},
		{
			id: 2,
			avatar: 'md-contact',
			score: 2,
			user_name: 'نام کاربر',
			comment_content: 'عالی ، از تمامی خدمات راضی بودم'
		},
		{
			id: 3,
			avatar: 'md-contact',
			score: 4,
			user_name: 'نام کاربر',
			comment_content: 'عالی ، از تمامی خدمات راضی بودم'
		},
		{
			id: 4,
			avatar: 'md-contact',
			score: 4,
			user_name: 'نام کاربر',
			comment_content: 'عالی ، از تمامی خدمات راضی بودم'
		},
		{
			id: 5,
			avatar: 'md-contact',
			score: 2,
			user_name: 'نام کاربر',
			comment_content: 'عالی ، از تمامی خدمات راضی بودم'
		},
	];
	ratingItems : Array<Rate> = [
		{
			id:1,
			name:'نظافت مجموعه'
		},
		{
			id:2,
			name:'کیفیت سرویس دهی'
		},
		{
			id:3,
			name:'سیستم تهویه'
		},
		{
			id:4,
			name:'نور و امکانات'
		},

	];

	get getComments(): Array<Comment> {
		return this.comments
	}
	get getRatings() : Array<Rate> {
		return this.ratingItems
	}
}

decorate(RatingStore, {
	comments: observable,

	getComments: computed,
	getRatings:computed
});

export const ratingStore = new RatingStore();
