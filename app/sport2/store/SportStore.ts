import {computed, decorate, observable} from "mobx";
import {ISportCarouselItem,IProgressBar} from "./types";

class SportStore {
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
    rattingItems : Array<IProgressBar> = [
        {
            id:1,
            text:'نظافت مجموعه',
            value:8
        },
        {
            id:2,
            text:'کیفیت سرویس دهی',
            value:6
        },
        {
            id:3,
            text:'سیستم تهویه',
            value:4
        },
        {
            id:4,
            text:'نور و امکانات',
            value:10
        },
    ];

    public get getCarouselItems(): Array<ISportCarouselItem> {
        return this.carouselItems;
    }

    public get getRattingItems():Array<IProgressBar>{
        return this.rattingItems
    }

}

decorate(SportStore, {
    carouselItems : observable,
    rattingItems:observable,

    getCarouselItems : computed,
    getRattingItems :computed
});


export const sportStore = new SportStore();
