export interface TicketList {
    state:'success'|'failed',
    message:string,
    ticketList:Array<Ticket>

}

export interface Ticket {
    uuid: string,
    status: string,
    type: null,
    userUUID: string,
    sportSite: {
        name: string,
        tel: Array<string>,
        mainPicUrl: string,
        address: {
            area: string
        }
    }
}
