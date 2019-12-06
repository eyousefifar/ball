import {computed, decorate, observable} from "mobx";
import {Sport} from "./types";

class FavoritesStore {
	reserved: Array<Sport> = [
		{
			id: 1,
			image: require('../assets/football.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.7,
			price: 12000,
			discount: null
		},
		{
			id: 2,
			image: require('../assets/gym.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.3,
			price: 11000,
			discount: 15
		},
		{
			id: 3,
			image: require('../assets/gym.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.3,
			price: 13000,
			discount: null
		},
		{
			id: 4,
			image: require('../assets/football.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.6,
			price: 15000,
			discount: 18
		},
		{
			id: 4,
			image: require('../assets/gym.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 3.7,
			price: 17000,
			discount: 8
		},
		{
			id: 5,
			image: require('../assets/football.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 2.3,
			price: 16000,
			discount: 10
		},
		{
			id: 6,
			image: require('../assets/gym.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4.6,
			price: 14000,
			discount: null
		},
		{
			id: 7,
			image: require('../assets/football.jpg'),
			name: 'استخر انقلاب',
			address: 'زنبیل آباد',
			score: 4,
			price: 10000,
			discount: null
		},
	];

	public get getReserved(): Array<Sport> {
		return this.reserved
	}

}

decorate(FavoritesStore, {
	reserved: observable,

	getReserved:computed
});

export const favoritesStore = new FavoritesStore();
