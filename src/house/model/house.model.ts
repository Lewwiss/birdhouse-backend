export class House {
    constructor(
        public id: String,
        public name: String,
        public longitude: Number,
        public latitude: Number,
        public birds: Birds[] = [],
        public eggs: Eggs[] = []
    ) {}
};

export class Birds {
    constructor(
        public date: String,
        public amount: Number
    ) {}
};

export class Eggs {
    constructor(
        public date: String,
        public amount: Number
    ) {}
};