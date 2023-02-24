export class House {
    constructor(
        public id: String,
        public name: String,
        public longitude: Number,
        public latitude: Number,
        public residency: Residency[] = [],
        public created: Number,
        public updated: Number
    ) {}
};

export class Residency {
    constructor(
        public date: Number,
        public birds: Number,
        public eggs: Number
    ) {}
};