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
exports.RetseptController = void 0;
const common_1 = require("@nestjs/common");
const retsept_service_1 = require("./retsept.service");
const create_retsept_dto_1 = require("./dto/create-retsept.dto");
const update_retsept_dto_1 = require("./dto/update-retsept.dto");
let RetseptController = class RetseptController {
    constructor(retseptService) {
        this.retseptService = retseptService;
    }
    create(createRetseptDto) {
        return this.retseptService.create(createRetseptDto);
    }
    findAll() {
        return this.retseptService.findAll();
    }
    findOne(id) {
        return this.retseptService.findOne(id);
    }
    update(id, updateRetseptDto) {
        return this.retseptService.update(id, updateRetseptDto);
    }
    remove(id) {
        return this.retseptService.remove(id);
    }
};
exports.RetseptController = RetseptController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_retsept_dto_1.CreateRetseptDto]),
    __metadata("design:returntype", void 0)
], RetseptController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RetseptController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RetseptController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_retsept_dto_1.UpdateRetseptDto]),
    __metadata("design:returntype", void 0)
], RetseptController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RetseptController.prototype, "remove", null);
exports.RetseptController = RetseptController = __decorate([
    (0, common_1.Controller)('retsept'),
    __metadata("design:paramtypes", [retsept_service_1.RetseptService])
], RetseptController);
//# sourceMappingURL=retsept.controller.js.map