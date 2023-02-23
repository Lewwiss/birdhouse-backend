"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseService = void 0;
const common_1 = require("@nestjs/common");
const house_model_1 = require("./model/house.model");
const registration_model_1 = require("./registration/registration.model");
const registration_1 = require("./registration/registration");
let HouseService = class HouseService {
    constructor() {
        this.houses = [];
    }
    getAllHouses() {
        return this.houses;
    }
    ;
    getHouseById(id) {
        return this.houses.find(item => item.id === id);
    }
    ;
    updateHouseById(ubid, id, name, longitude, latitude) {
        if (!this.authenticateUbidFromId(ubid, id))
            return;
        const houseIndex = this.houses.findIndex(item => item.id === id);
        const currentHouse = this.houses[houseIndex];
        const updatedHouse = Object.assign({}, currentHouse);
        updatedHouse.name = name;
        updatedHouse.longitude = longitude;
        updatedHouse.latitude = latitude;
        this.houses[houseIndex] = updatedHouse;
        console.log(`${ubid} updated ${id}`);
        return this.houses[houseIndex];
    }
    ;
    createHouse(ubid, name, longitude, latitude) {
        const id = Math.random().toString(16).slice(2);
        if (ubid && registration_1.registrations.find(item => item.ubid === ubid)) {
            const registrationIndex = registration_1.registrations.findIndex(item => item.ubid === ubid);
            registration_1.registrations[registrationIndex].ids.push(id);
        }
        else {
            ubid = Math.random().toString(16).slice(2);
            registration_1.registrations.push(new registration_model_1.Registration(ubid, [id]));
        }
        ;
        const houseObj = new house_model_1.House(id, name, longitude, latitude);
        this.houses.push(houseObj);
        console.log(`${ubid} created ${id}`);
        return Object.assign(Object.assign({}, houseObj), { ubid });
    }
    ;
    updateResidencyById(ubid, id, birds, eggs) {
        if (!this.authenticateUbidFromId(ubid, id))
            return;
        const houseIndex = this.houses.findIndex(item => item.id === id);
        const currentHouse = this.houses[houseIndex];
        const updatedResidency = Object.assign({}, currentHouse);
        updatedResidency.birds.push(birds);
        updatedResidency.eggs.push(eggs);
        this.houses[houseIndex] = updatedResidency;
        console.log(`${ubid} updated ${id}`);
        return this.houses[houseIndex];
    }
    ;
    deleteHouseById(ubid, id) {
        if (!this.authenticateUbidFromId(ubid, id))
            return;
        const houseIndex = this.houses.findIndex(item => item.id === id);
        this.houses.splice(houseIndex, 1);
        const registrationIndex = registration_1.registrations.findIndex(item => item.ubid === ubid);
        const idIndex = registration_1.registrations[registrationIndex].ids.findIndex(item => item === id);
        registration_1.registrations[registrationIndex].ids.splice(idIndex, 1);
        console.log(`${ubid} deleted ${id}`);
        return;
    }
    ;
    authenticateUbidFromId(ubid, id) {
        if (!registration_1.registrations.find(item => item.ubid === ubid))
            return false;
        const registrationIndex = registration_1.registrations.findIndex(item => item.ubid === ubid);
        if (registration_1.registrations[registrationIndex].ids.includes(id))
            return true;
        else
            return false;
    }
    ;
};
HouseService = __decorate([
    (0, common_1.Injectable)()
], HouseService);
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map