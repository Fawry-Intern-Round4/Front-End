// product.ts
export class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  image: string;

  constructor(id?: number, code?: string, name?: string, description?: string, price?: number, image?: string) {
    this.id = id || 0;
    this.code = code || '';
    this.name = name || '';
    this.description = description || '';
    this.price = price || 0;
    this.image = image || '';
  }
}
