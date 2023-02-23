export declare class House {
    id: String;
    name: String;
    longitude: Number;
    latitude: Number;
    birds: Birds[];
    eggs: Eggs[];
    constructor(id: String, name: String, longitude: Number, latitude: Number, birds?: Birds[], eggs?: Eggs[]);
}
export declare class Birds {
    date: String;
    amount: Number;
    constructor(date: String, amount: Number);
}
export declare class Eggs {
    date: String;
    amount: Number;
    constructor(date: String, amount: Number);
}
