export class OrderRequestItem {
    public productId: number;
    public storeId: number;
    public quantity: number;
    public name: string;
    public price: number;
    public image: string;
  
    constructor(productId?: number, storeId?: number, quantity?: number, name?: string, price?: number, image?: string) {
      this.productId = productId || 0;
      this.storeId = storeId || 0;
      this.quantity = quantity || 0;
      this.name = name || '';
      this.price = price || 0;
      this.image = image || '';
    }
}