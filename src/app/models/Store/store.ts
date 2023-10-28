export class Store {
    private _id: number;
    private _name: string;
    private _location: string;
  
    constructor(id: number, name: string, location: string) {
      this._id = id;
      this._name = name;
      this._location = location;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    set location(value: string) {
      this._location = value;
    }
  
    get id(): number {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get location(): string {
      return this._location;
    }
  }