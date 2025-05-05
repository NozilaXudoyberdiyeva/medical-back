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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetseptService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let RetseptService = class RetseptService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRetseptDto) {
        const retsept = await this.prisma.retsept.create({
            data: createRetseptDto,
        });
        return {
            message: 'Retsept created successfully!',
            retsept,
        };
    }
    async findAll() {
        const retsepts = await this.prisma.retsept.findMany({
            include: {
                doctor: {
                    include: {
                        specialization: true,
                    },
                },
                patient: true,
            },
        });
        return {
            message: 'All retsepts retrieved successfully!',
            retsepts,
        };
    }
    async findOne(id) {
        const retsept = await this.prisma.retsept.findUnique({
            where: { id },
            include: {
                doctor: true,
                patient: true,
            },
        });
        if (!retsept) {
            throw new common_1.NotFoundException(`Retsept with ID ${id} not found`);
        }
        return {
            message: `Retsept with ID ${id} found`,
            retsept,
        };
    }
    async update(id, updateRetseptDto) {
        const retsept = await this.prisma.retsept.update({
            where: { id },
            data: updateRetseptDto,
        });
        return {
            message: `Retsept with ID ${id} updated successfully`,
            retsept,
        };
    }
    async remove(id) {
        const deleted = await this.prisma.retsept.delete({
            where: { id },
        });
        return { message: `Retsept with ID ${id} deleted successfully`, deleted };
    }
};
exports.RetseptService = RetseptService;
exports.RetseptService = RetseptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RetseptService);
//# sourceMappingURL=retsept.service.js.map