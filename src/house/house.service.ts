import { Injectable } from '@nestjs/common';
import { House, Residency } from './model/house.model';
import { Registration } from './registration/registration.model';
import { registrations } from './registration/registration';

@Injectable()
export class HouseService {
    private readonly houses: House[] = [
        {
            "id": "39c5235feaeb4",
            "name": "Cool birdhouse",
            "longitude": 7.16085,
            "latitude": 16.072736,
            "residency": [
                {
                    "date": 1676851200000,
                    "birds": 4,
                    "eggs": 1
                },
                {
                    "date": 1676937600000,
                    "birds": 5,
                    "eggs": 2
                },
                {
                    "date": 1677024000000,
                    "birds": 5,
                    "eggs": 4
                },
                {
                    "date": 1677110400000,
                    "birds": 4,
                    "eggs": 10
                },
                {
                    "date": 1677196800000,
                    "birds": 2,
                    "eggs": 5
                },
                {
                    "date": 1677283200000,
                    "birds": 2,
                    "eggs": 10
                },
                {
                    "date": 1677369600000,
                    "birds": 3,
                    "eggs": 0
                }
            ],
            "created": 1677387408589,
            "updated": 1677387492294
        }
    ];

    getAllHouses(): any {
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
        // Checks length of name input and only updates if valid
        if (name.length < 4 || name.length > 16) {
            updatedHouse.name = name;
        };
        // Updates old values with new values
        updatedHouse.longitude = longitude;
        updatedHouse.latitude = latitude;
        updatedHouse.updated = Date.now();
        // Replaces and returns new house object
        this.houses[houseIndex] = updatedHouse;
        // Logging
        console.log(`${ubid} updated ${id}`);
        return this.houses[houseIndex];
    };

    createHouse(ubid, name, longitude, latitude): any {
        // Checks length of name input
        if (name.length < 4 || name.length > 16) return "Name cannot be shorter than 4 or longer than 16 characters";
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
        // Created the created timestamp
        const created = Date.now();
        // Created the updatd timestamp
        const updated = created;
        // Creates a new House object with given values
        const houseObj = new House (
            id,
            name,
            longitude,
            latitude,
            [],
            created,
            updated
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
        // Creates a new residency
        const newResidency = new Residency(Date.now(), birds, eggs);
        // Pushes new residency records to house object
        updatedResidency.residency.push(newResidency);
        updatedResidency.updated = Date.now();
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

    pruneHouses(ubid): any {
        // If there aren't any houses
        if (this.houses.length <= 0) return;
        // Logging
        console.log(`${ubid} pruned`);
        // Compare created timestamp and updated timestamp
        this.houses.forEach((house) => {
            // Get dates and compare time difference
            const createdDate: Date = new Date(house.created.valueOf());
            const updatedDate: Date = new Date(house.updated.valueOf());
            const differenceTime: Number = Math.abs(createdDate.valueOf() - updatedDate.valueOf());
            const differenceDays: Number = Math.ceil(differenceTime.valueOf() / (1000 * 60 * 60 * 24));
            // If difference is 365 then remove
            if (differenceDays.valueOf() >= 365) {
                // Remove from houses array
                const houseIndex = this.houses.findIndex(item => item.id === house.id);
                this.houses.splice(houseIndex, 1);
                // Remove from registrations array
                const registrationIndex = registrations.findIndex(item => item.ids.includes(house.id));
                const idIndex = registrations[registrationIndex].ids.findIndex(item => item === house.id);
                registrations[registrationIndex].ids.splice(idIndex, 1);
            };
        });
        return;
    };
}