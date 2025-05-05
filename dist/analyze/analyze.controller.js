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
exports.AnalyzeController = void 0;
const common_1 = require("@nestjs/common");
const analyze_service_1 = require("./analyze.service");
const create_analyze_dto_1 = require("./dto/create-analyze.dto");
const update_analyze_dto_1 = require("./dto/update-analyze.dto");
let AnalyzeController = class AnalyzeController {
    constructor(analyzeService) {
        this.analyzeService = analyzeService;
    }
    create(createAnalyzeDto) {
        return this.analyzeService.create(createAnalyzeDto);
    }
    findAll() {
        return this.analyzeService.findAll();
    }
    findOne(id) {
        return this.analyzeService.findOne(id);
    }
    update(id, updateAnalyzeDto) {
        return this.analyzeService.update(id, updateAnalyzeDto);
    }
    remove(id) {
        return this.analyzeService.remove(id);
    }
};
exports.AnalyzeController = AnalyzeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_analyze_dto_1.CreateAnalyzeDto]),
    __metadata("design:returntype", void 0)
], AnalyzeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalyzeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnalyzeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_analyze_dto_1.UpdateAnalyzeDto]),
    __metadata("design:returntype", void 0)
], AnalyzeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnalyzeController.prototype, "remove", null);
exports.AnalyzeController = AnalyzeController = __decorate([
    (0, common_1.Controller)('analyze'),
    __metadata("design:paramtypes", [analyze_service_1.AnalyzeService])
], AnalyzeController);
//# sourceMappingURL=analyze.controller.js.map