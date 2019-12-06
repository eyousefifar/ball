import {action, observable, computed, decorate} from 'mobx';
import {FilterCategory} from "./types";
import {SearchItem} from "../library/types";
import {getSanes} from "../../sportReservation2/library/api";
import {ToastAndroid} from "react-native";
import {searchSportSites} from "../library/api";

class SearchStoreClass {
    // observables
    filterCategories: Array<FilterCategory> = [
        {
            title: 'شنا',
            icon: 'md-football',
        },
        {
            title: 'فوتبال',
            icon: 'md-fitness',
        },
        {
            title: 'فوتسال',
            icon: 'md-bicycle',
        },
        {
            title: 'والیبال',
            icon: 'md-football',
        },
        {
            title: 'بسکتبال',
            icon: 'md-baseball',
        },
        {
            title: 'بولینگ',
            icon: 'md-basketball',
        },
        {
            title: 'بدن سازی',
            icon: 'md-tennisball',
        },
        {
            title: 'پینت بال',
            icon: 'md-tennisball',
        },
        {
            title: 'اتاق فرار',
            icon: 'md-tennisball',
        },
    ];
    searchResult: Array<SearchItem> = [];

    gender: 'مرد' | 'زن' = 'مرد';
    query: string = '';
    loading: boolean = false;

    activeFilters: Array<string> = [];


    //functions
    get queryValue(): string {
        return this.query
    }

    get allFilterCategories(): Array<FilterCategory> {
        return this.filterCategories;
    };

    get getSearchResult(): any {
        return this.searchResult;
    };

    // computed
    get queryEmpty(): boolean {
        return this.query === '';
    };

    get searchResultEmpty(): boolean {
        return this.searchResult.length === 0;
    };

    // actions
    getAllReserveList = async () => {
        // this.loading = false;
        this.searchResult = [];
        let res = await searchSportSites(this.query, this.gender, this.activeFilters);

        if (res.state === 'success') {
            this.searchResult = res.searchResult;

            // console.warn('Search Response : ', this.searchResult);

            // this.loading = true

        } else {
            ToastAndroid.show(res.message, ToastAndroid.SHORT);
            // this.loading = true
        }
    };

    setQuery = (text: string): void => {
        this.query = text;
    };
    setGenderState = (state: 'زن' | 'مرد') => {
        this.gender = state
    };

    addToFilters = (filter: string) => {
        this.activeFilters.push(filter);
        // console.warn('Added : ', this.activeFilters)
    };

    removeFromFilter = (filterName: string) => {
        for (let i = 0; i < this.activeFilters.length; i++) {
            if (this.activeFilters[i] === filterName) {
                this.activeFilters.splice(i, 1)
            }
        }
        // console.warn('Removed : ', this.activeFilters)
    };


    reset = () => {
        this.query = '';
        this.gender = 'مرد';
        this.searchResult = [];
        this.activeFilters = [];
    }

}

decorate(SearchStoreClass, {
    //observable
    activeFilters: observable,
    query: observable,
    searchResult: observable,
    filterCategories: observable,
    loading: observable,
    gender: observable,

    //computed
    queryEmpty: computed,
    searchResultEmpty: computed,

    //action
    getAllReserveList: action,
    setQuery: action,
    setGenderState: action,
    addToFilters: action,
    removeFromFilter: action,

    reset:action,
});

// export default storeClass;
export const searchStoreClass = new SearchStoreClass();
