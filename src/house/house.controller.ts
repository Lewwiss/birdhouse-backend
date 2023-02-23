import { Controller, Get, Post, Patch, Delete, Body, Param, Headers } from '@nestjs/common';
import { HouseService } from './house.service';
import { House, Birds, Eggs } from './model/house.model';
import { registrations } from './registration/registration';
import { Registration } from './registration/registration.model';

@Controller('house')
export class HouseController {
    constructor(private readonly houseService: HouseService) {}

    @Get()
    getAllHouses() {
        return this.houseService.getAllHouses();
    };

    @Get("registrations")
    getAllRegistrations(): Registration[] {
        return registrations;
    };

    @Get(":id")
    getHouseById(@Param("id") id): House {
        return this.houseService.getHouseById(id);
    };

    @Patch(":id")
    updateHouseById(@Headers("X-UBID") ubid, @Param("id") id, @Body("name") name, @Body("longitude") longitude, @Body("latitude") latitude): House {
        return this.houseService.updateHouseById(ubid, id, name, longitude, latitude);
    };

    @Post()
    createHouse(@Headers("X-UBID") ubid, @Body("name") name, @Body("longitude") longitude, @Body("latitude") latitude): House{
        return this.houseService.createHouse(ubid, name, longitude, latitude);
    };

    @Post("prune")
    pruneHouses(@Headers("X-UBID") ubid): any {
        return this.houseService.pruneHouses(ubid);
    };

    @Post(":id/residency")
    updateResidencyById(@Headers("X-UBID") ubid, @Param("id") id, @Body("birds") birds: Birds , @Body("eggs") eggs: Eggs): House {
        return this.houseService.updateResidencyById(ubid, id, birds, eggs);
    };

    @Delete(":id")
    deleteHouseById(@Headers("X-UBID") ubid, @Param("id") id): any {
        return this.houseService.deleteHouseById(ubid, id);
    };
}