import {computed, decorate, observable} from "mobx";
import {ISportCarouselItem, SportComplexCarouselItem} from "./types";

class SportComplexStore {
	carouselItems: Array<ISportCarouselItem> = [
		{
			id: 1,
			color: '#7200ca',
			image:require('../../home2/assets/slider/1.jpg'),
			footer_text: null
		},
		{
			id: 2,
			color: '#ca3121',
			image:require('../../home2/assets/slider/2.jpg'),
			footer_text: null
		},
		{
			id: 3,
			color: '#ca1f4e',
			image:require('../../home2/assets/slider/3.jpg'),
			footer_text: null
		},
		{
			id: 4,
			color: '#1a67ca',
			image:require('../../home2/assets/slider/1.jpg'),
			footer_text: null
		},
		{
			id: 5,
			color: '#140cca',
			image:require('../../home2/assets/slider/5.jpg'),
			footer_text: 'اشتراک'
		},
		{
			id: 4,
			color: '#0d8eca',
			image:require('../../home2/assets/slider/1.jpg'),
			footer_text: null
		},
	];

	public get getCarouselItems(): Array<SportComplexCarouselItem> {
		return this.carouselItems;
	}
}

decorate(SportComplexStore, {
	carouselItems : observable,

	getCarouselItems : computed,
});


export const sportComplexStore = new SportComplexStore();
