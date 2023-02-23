import { HouseService } from './house.service';
import { House, Birds, Eggs } from './model/house.model';
import { Registration } from './registration/registration.model';
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    getAllHouses(): House[];
    getAllRegistrations(): Registration[];
    getHouseById(id: any): House;
    updateHouseById(ubid: any, id: any, name: any, longitude: any, latitude: any): House;
    createHouse(ubid: any, name: any, longitude: any, latitude: any): House;
    updateResidencyById(ubid: any, id: any, birds: Birds, eggs: Eggs): House;
    deleteHouseById(ubid: any, id: any): any;
}
