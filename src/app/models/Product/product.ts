export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  
    constructor(id?: number, name?: string, description?: string, price?: number, image?: string) {
      this.id = id || 0;
      this.name = name || '';
      this.description = description || '';
      this.price = price || 0;
      this.image = image || '';
    }
  }
  