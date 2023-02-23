"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseController = void 0;
const common_1 = require("@nestjs/common");
const house_service_1 = require("./house.service");
const house_model_1 = require("./model/house.model");
const registration_1 = require("./registration/registration");
let HouseController = class HouseController {
    constructor(houseService) {
        this.houseService = houseService;
    }
    getAllHouses() {
        return this.houseService.getAllHouses();
    }
    ;
    getAllRegistrations() {
        return registration_1.registrations;
    }
    ;
    getHouseById(id) {
        return this.houseService.getHouseById(id);
    }
    ;
    updateHouseById(ubid, id, name, longitude, latitude) {
        return this.houseService.updateHouseById(ubid, id, name, longitude, latitude);
    }
    ;
    createHouse(ubid, name, longitude, latitude) {
        return this.houseService.createHouse(ubid, name, longitude, latitude);
    }
    ;
    updateResidencyById(ubid, id, birds, eggs) {
        return this.houseService.updateResidencyById(ubid, id, birds, eggs);
    }
    ;
    deleteHouseById(ubid, id) {
        return this.houseService.deleteHouseById(ubid, id);
    }
    ;
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "getAllHouses", null);
__decorate([
    (0, common_1.Get)("registrations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], HouseController.prototype, "getAllRegistrations", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", house_model_1.House)
], HouseController.prototype, "getHouseById", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Headers)("X-UBID")),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)("name")),
    __param(3, (0, common_1.Body)("longitude")),
    __param(4, (0, common_1.Body)("latitude")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", house_model_1.House)
], HouseController.prototype, "updateHouseById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)("X-UBID")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("longitude")),
    __param(3, (0, common_1.Body)("latitude")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", house_model_1.House)
], HouseController.prototype, "createHouse", null);
__decorate([
    (0, common_1.Post)(":id/residency"),
    __param(0, (0, common_1.Headers)("X-UBID")),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)("birds")),
    __param(3, (0, common_1.Body)("eggs")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, house_model_1.Birds, house_model_1.Eggs]),
    __metadata("design:returntype", house_model_1.House)
], HouseController.prototype, "updateResidencyById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Headers)("X-UBID")),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], HouseController.prototype, "deleteHouseById", null);
HouseController = __decorate([
    (0, common_1.Controller)('house'),
    __metadata("design:paramtypes", [house_service_1.HouseService])
], HouseController);
exports.HouseController = HouseController;
//# sourceMappingURL=house.controller.js.map