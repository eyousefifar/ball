import {computed, decorate, observable} from "mobx";
import {ISportList, Sport} from "./types";


class SearchGroupStore {
	sports: Array<Sport> = [
		{
			id: 1,
			image: require('../assets/1.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.7,
			price: 12000,
			discount: null
		},
		{
			id: 2,
			image: require('../assets/1.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.3,
			price: 11000,
			discount: 15
		},
		{
			id: 3,
			image: require('./../assets/3.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.3,
			price: 13000,
			discount: null
		},
		{
			id: 4,
			image: require('./../assets/4.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.6,
			price: 15000,
			discount: 18
		},
		{
			id: 5,
			image: require('./../assets/5.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 3.7,
			price: 17000,
			discount: 8
		},
		{
			id: 6,
			image: require('./../assets/6.jpeg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 2.3,
			price: 16000,
			discount: 10
		},
		{
			id: 7,
			image: require('./../assets/1.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.6,
			price: 14000,
			discount: 5
		},
		{
			id: 8,
			image: require('./../assets/2.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: null
		},
		{
			id: 9,
			image: require('./../assets/3.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: null
		},
		{
			id: 10,
			image: require('./../assets/4.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: null
		},
		{
			id: 11,
			image: require('./../assets/5.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: 20
		},
		{
			id: 12,
			image: require('./../assets/6.jpeg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: 15
		},
		{
			id: 13,
			image: require('./../assets/6.jpeg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: 15
		},
	];
	sports2 : Array<ISportList> = [
		{
			items:[
				{
					id: 1,
					image: require('../assets/1.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.7,
					price: 12000,
					discount: null
				},
				{
					id: 2,
					image: require('../assets/1.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 11000,
					discount: 15
				},
				{
					id: 3,
					image: require('./../assets/3.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.3,
					price: 13000,
					discount: null
				},
				{
					id: 4,
					image: require('./../assets/4.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 4.6,
					price: 15000,
					discount: 18
				},
				{
					id: 5,
					image: require('./../assets/5.jpg'),
					name: 'استخر انقلاب',
					address: 'زنبیل آباد',
					score: 3.7,
					price: 17000,
					discount: 8
				},
			]
		}
	];

	public get getSports(): Array<Sport> {
		return this.sports
	}
}

decorate(SearchGroupStore, {
	sports: observable,

	getSports: computed
});

export const searchGroupStore = new SearchGroupStore();
