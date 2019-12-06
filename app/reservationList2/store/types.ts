export interface SearchResult {
    name:string,
    location:string,
    score:number,
    price:number
}

export interface IReserveList {
    items : Array<IReserveItem>
}

export interface IReserveItem {
    name: string,
    location: string,
    score: number,
    price: number,
    discount? : number | null,
}
