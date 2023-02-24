export declare class House {
    id: String;
    name: String;
    longitude: Number;
    latitude: Number;
    residency: Residency[];
    created: Number;
    updated: Number;
    constructor(id: String, name: String, longitude: Number, latitude: Number, residency: Residency[], created: Number, updated: Number);
}
export declare class Residency {
    date: Number;
    birds: Number;
    eggs: Number;
    constructor(date: Number, birds: Number, eggs: Number);
}
