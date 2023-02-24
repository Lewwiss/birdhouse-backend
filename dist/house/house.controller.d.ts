import { HouseService } from './house.service';
import { House } from './model/house.model';
import { Registration } from './registration/registration.model';
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    getAllHouses(): any;
    getAllRegistrations(): Registration[];
    getHouseById(id: any): House;
    updateHouseById(ubid: any, id: any, name: any, longitude: any, latitude: any): House;
    createHouse(ubid: any, name: any, longitude: any, latitude: any): House;
    pruneHouses(ubid: any): any;
    updateResidencyById(ubid: any, id: any, birds: Number, eggs: Number): House;
    deleteHouseById(ubid: any, id: any): any;
}
