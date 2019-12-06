import {ICarouselItem, HomeList} from "./types";
import {computed, decorate, observable} from "mobx";

class HomeStore {
	carousel_items: Array<ICarouselItem> = [
		{
			id: 1,
			color: '#7200ca',
			image:require('./../assets/slider/1.jpg'),
			footer_text: 'اشتراک'
		},
		{
			id: 2,
			color: '#ca3121',
			image:require('./../assets/slider/2.jpg'),
			footer_text: 'اشتراک'
		},
		{
			id: 3,
			color: '#ca1f4e',
			image:require('./../assets/slider/3.jpg'),
			footer_text: 'اشتراک'
		},
		{
			id: 4,
			color: '#1a67ca',
			image:require('./../assets/slider/1.jpg'),
			footer_text: 'اشتراک'
		},
		{
			id: 5,
			color: '#140cca',
			image:require('./../assets/slider/5.jpg'),
			footer_text: 'اشتراک'
		},
		{
			id: 4,
			color: '#0d8eca',
			image:require('./../assets/slider/1.jpg'),
			footer_text: 'اشتراک'
		},
	];
	home_list: Array<HomeList> = [
		{
			header_text: 'تفریحات آبی',
			sports: [
				{
					id: 1,
					image: require('./../assets/sports/1.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.7,
					price: 12000,
					discount: null
				},
				{
					id: 2,
					image: require('./../assets/sports/2.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 11000,
					discount: 15
				},
				{
					id: 3,
					image: require('./../assets/sports/3.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 13000,
					discount: null
				},
				{
					id: 4,
					image: require('./../assets/sports/4.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.6,
					price: 15000,
					discount: 18
				},
				{
					id: 4,
					image: require('./../assets/sports/5.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 3.7,
					price: 17000,
					discount: 8
				},
				{
					id: 5,
					image: require('./../assets/sports/6.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 2.3,
					price: 16000,
					discount: 10
				},
				{
					id: 6,
					image: require('./../assets/sports/7.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.6,
					price: 14000,
					discount: null
				},
				{
					id: 7,
					image: require('./../assets/sports/8.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4,
					price: 10000,
					discount: null
				},
			]
		},
		{
			header_text: 'سالن های برتر',
			sports: [
				{
					id: 8,
					image: require('./../assets/sports/9.jpeg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.1,
					price: 12000,
					discount: 10
				},
				{
					id: 9,
					image: require('./../assets/sports/10.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.6,
					price: 15000,
					discount: null
				},
				{
					id: 10,
					image: require('./../assets/sports/1.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.4,
					price: 16000,
					discount: 9
				},
				{
					id: 11,
					image: require('./../assets/sports/2.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 7
				},
				{
					id: 12,
					image: require('./../assets/sports/3.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 11
				},
				{
					id: 13,
					image: require('./../assets/sports/4.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 14,
					image: require('./../assets/sports/5.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 25
				},
				{
					id: 15,
					image: require('./../assets/sports/6.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 30
				},

			]
		},
		{
			header_text: 'مجموعه های ورزشی',
			sports: [
				{
					id: 16,
					image: require('./../assets/sports/7.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 35
				},
				{
					id: 17,
					image: require('./../assets/sports/8.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 40
				},
				{
					id: 18,
					image: require('./../assets/sports/9.jpeg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 5
				},
				{
					id: 19,
					image: require('./../assets/sports/10.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 20,
					image: require('./../assets/sports/1.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 20,
					image: require('./../assets/sports/2.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 21,
					image: require('./../assets/sports/3.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 18
				},
				{
					id: 22,
					image: require('./../assets/sports/4.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 25
				},

			]
		},
		{
			header_text: 'سالن های فوتبال',
			sports: [
				{
					id: 22,
					image: require('./../assets/sports/5.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 23,
					image: require('./../assets/sports/6.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 24,
					image: require('./../assets/sports/7.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 25,
					image: require('./../assets/sports/8.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 26,
					image: require('./../assets/sports/9.jpeg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: null
				},
				{
					id: 27,
					image: require('./../assets/sports/10.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 28,
					image: require('./../assets/sports/1.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					// discount: null
				},
				{
					id: 29,
					image: require('./../assets/sports/2.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},

			]
		},
		{
			header_text: 'سالن های بسکتبال',
			sports: [
				{
					id: 30,
					image: require('./../assets/sports/3.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 31,
					image: require('./../assets/sports/4.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 32,
					image: require('./../assets/sports/5.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 33,
					image: require('./../assets/sports/6.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 34,
					image: require('./../assets/sports/7.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 35,
					image: require('./../assets/sports/8.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 36,
					image: require('./../assets/sports/9.jpeg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},
				{
					id: 37,
					image: require('./../assets/sports/10.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 23000,
					discount: 10
				},

			]
		},
	];

	public get getCarouselItems(): Array<ICarouselItem> {
		return this.carousel_items;
	}

	public get getHomeList(): Array<HomeList> {
		return this.home_list;
	}
}

decorate(HomeStore, {
	carousel_items: observable,
	home_list: observable,

	getCarouselItems: computed,
	getHomeList: computed,

});


export const homeStore = new HomeStore();
