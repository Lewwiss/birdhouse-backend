"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residency = exports.House = void 0;
class House {
    constructor(id, name, longitude, latitude, residency = [], created, updated) {
        this.id = id;
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.residency = residency;
        this.created = created;
        this.updated = updated;
    }
}
exports.House = House;
;
class Residency {
    constructor(date, birds, eggs) {
        this.date = date;
        this.birds = birds;
        this.eggs = eggs;
    }
}
exports.Residency = Residency;
;
//# sourceMappingURL=house.model.js.map