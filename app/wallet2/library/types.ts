export interface WalletRes {
    state: 'success' | 'failed',
    walletRes: WalletPage ,
    message:string
}

export interface TransactionRes {
    state: 'success' | 'failed',
    transactions: Array<Transaction> ,
    message:string
}

export interface WalletPage {
    uuid:string,
    amount:number,
    activeDiscount:5000,
    walletTransactions:Array<Transaction>,
}

export interface Transaction {
    uuid: string,
    amount: number,
    transactionType: 'inc' | 'dec',
    description: string | null,
    createdAt: string,
}

export interface IncreaseCashRes {
    state: 'success' | 'failed',
    link:string,
    message:string
}

