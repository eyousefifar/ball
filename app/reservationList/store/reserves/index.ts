import { observable, action,decorate } from 'mobx';

import reservesStore from './reserves';

decorate(reservesStore, {
    cardExpanded : observable,
    lastReserve : observable,
    reservesList : observable,
    setCardExpanded : action
});

const store = new reservesStore();
export default store;
