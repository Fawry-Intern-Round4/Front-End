
export class Store {
    public storeId : number;
    public storeName : string;
    public location : string;

    constructor(storeId?: number, storeName?: string, location?: string){
        this.storeId = storeId || 0;
        this.storeName = storeName || '';
        this.location = location || '';
    }
}