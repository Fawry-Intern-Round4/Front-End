import { Store } from "../Store/store";

export class ProductConsumption {
    constructor(
        public consumptionId : number,
        public productId: number,
        public store: Store,
        public quantityConsumed: number,
        public dateConsumed: string
    ){}
}