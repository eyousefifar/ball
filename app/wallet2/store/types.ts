export interface ITransactionCard {
  providerType: string ;
  providerTitle: string;
  paymentType: 'shop' | 'increaseCash';
  location: {
    lat: number;
    long: number;
  };
  address: string;
  date: string;
  time: string;
}

export interface Transaction {
  price:number,
  payedFor:string | null,
  date:string,
  time:string,
  paymentType: 'inc' | 'dec';
}

export interface IMonthCarousel {
  id: number,
  month: string,
}

export interface IDayCarousel {
  id: number,
  day: number
}

