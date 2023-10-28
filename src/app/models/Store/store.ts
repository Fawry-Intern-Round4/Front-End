export class Store {
    id: number;
    name: string;
    location: string;
  
    constructor(id?: number, name?: string, location?: string) {
      this.id = id || 0;
      this.name = name || '';
      this.location = location || '';
    }
  }