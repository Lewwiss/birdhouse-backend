import { Injectable } from '@nestjs/common';
import { House } from './model/house.model';
import { Registration } from './registration/registration.model';
import { registrations } from './registration/registration';

@Injectable()
export class HouseService {
    private readonly houses: House[] = [];

    getAllHouses() {
        // Returns house array
        return this.houses;
    };

    getHouseById(id): House {
        // Finds and returns house with matching id
        return this.houses.find(item => item.id === id);
    };

    updateHouseById(ubid, id, name, longitude, latitude): any {
        // Authenticate ubid and id
        if (!this.authenticateUbidFromId(ubid, id)) return;
        // Finds index of house with matching id
        const houseIndex = this.houses.findIndex(item => item.id === id);
        // Stores the current house value
        const currentHouse = this.houses[houseIndex];
        // Creates a new house with old values
        const updatedHouse = {...currentHouse};
        // Updates old values with new values
        updatedHouse.name = name;
        updatedHouse.longitude = longitude;
        updatedHouse.latitude = latitude;
        // Replaces and returns new house object
        this.houses[houseIndex] = updatedHouse;
        // Logging
        console.log(`${ubid} updated ${id}`);
        return this.houses[houseIndex];
    };

    createHouse(ubid, name, longitude, latitude): any {
        // Creates us a random id
        const id = Math.random().toString(16).slice(2);
        // Check if ubid is present in request and exists
        if (ubid && registrations.find(item => item.ubid === ubid)) {
            // Finds the index of ubid
            const registrationIndex = registrations.findIndex(item => item.ubid === ubid)
            // Add new id to existing ubid
            registrations[registrationIndex].ids.push(id);
        } else {
            // If ubid doesn't exist in request
            ubid = Math.random().toString(16).slice(2);
            // Add ubid value to registrations
            registrations.push(new Registration(ubid, [id]));
        };
        // Creates a new House object with given values
        const houseObj = new House (
            id,
            name,
            longitude,
            latitude,
        );
        // Pushes new house to the houses array
        this.houses.push(houseObj);
        // Logging
        console.log(`${ubid} created ${id}`);
        return {...houseObj, ubid};
    };

    updateResidencyById(ubid, id, birds, eggs): any {
        // Authenticate ubid and id
        if (!this.authenticateUbidFromId(ubid, id)) return;
        // Finds index of house with matching id
        const houseIndex = this.houses.findIndex(item => item.id === id);
        // Stores the current house value
        const currentHouse = this.houses[houseIndex];
        // Creates a new house with old values
        const updatedResidency = {...currentHouse};
        // Pushes new residency records to house object
        updatedResidency.birds.push(birds);
        updatedResidency.eggs.push(eggs);
        // Replaces and returns new house object
        this.houses[houseIndex] = updatedResidency;
        // Logging
        console.log(`${ubid} updated ${id}`);
        return this.houses[houseIndex];
    };

    deleteHouseById(ubid, id) {
        // Authenticate ubid and id
        if (!this.authenticateUbidFromId(ubid, id)) return;
        // Finds index of house with matching id
        const houseIndex = this.houses.findIndex(item => item.id === id);
        // Splices this houseIndex out of houses array
        this.houses.splice(houseIndex, 1);
        // Finds the index of ubid
        const registrationIndex = registrations.findIndex(item => item.ubid === ubid); 
        // Finds the index of id in ids
        const idIndex = registrations[registrationIndex].ids.findIndex(item => item === id);
        // Splices this id out of ids array
        registrations[registrationIndex].ids.splice(idIndex, 1);
        // Logging
        console.log(`${ubid} deleted ${id}`);
        return;
    };

    authenticateUbidFromId(ubid, id): Boolean {
        // Check ubid exists in registrations
        if (!registrations.find(item => item.ubid === ubid)) return false;
        // Finds the index of ubid
        const registrationIndex = registrations.findIndex(item => item.ubid === ubid);
        // Checks ubids id array for id
        if (registrations[registrationIndex].ids.includes(id)) return true;
        else return false;
    };
}