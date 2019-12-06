export interface ReservesPageRes {
    state:'success'|'failed',
    message:string,
    reserveRes:ReserveRes,
    minTime:string

}

export interface ReserveRes {
    reserveItemCards:Array<ReserveItem>,
    fromNearestReserveItemTime:string
}

export interface ReserveItem {
    uuid: string,
    code: string,
    reserve: {
        uuid: string,
        sportSite: {
            name:string,
            mainPicUrl: string,
            address: {
                area: string
            }
        }
    },
    session: {
        date: string,
        sessionTime: {
            startTime: string
        }
    }
}

export interface DeleteRes {
    state:'success'|'failed',
    message:string,
}
