import { House } from './model/house.model';
export declare class HouseService {
    private readonly houses;
    getAllHouses(): any;
    getHouseById(id: any): House;
    updateHouseById(ubid: any, id: any, name: any, longitude: any, latitude: any): any;
    createHouse(ubid: any, name: any, longitude: any, latitude: any): any;
    updateResidencyById(ubid: any, id: any, birds: any, eggs: any): any;
    deleteHouseById(ubid: any, id: any): void;
    authenticateUbidFromId(ubid: any, id: any): Boolean;
    pruneHouses(ubid: any): any;
}
