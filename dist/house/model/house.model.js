"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eggs = exports.Birds = exports.House = void 0;
class House {
    constructor(id, name, longitude, latitude, birds = [], eggs = [], created, updated) {
        this.id = id;
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.birds = birds;
        this.eggs = eggs;
        this.created = created;
        this.updated = updated;
    }
}
exports.House = House;
;
class Birds {
    constructor(date, amount) {
        this.date = date;
        this.amount = amount;
    }
}
exports.Birds = Birds;
;
class Eggs {
    constructor(date, amount) {
        this.date = date;
        this.amount = amount;
    }
}
exports.Eggs = Eggs;
;
//# sourceMappingURL=house.model.js.map