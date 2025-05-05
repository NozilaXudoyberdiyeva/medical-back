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
exports.SpecialtyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./../prisma.service");
const common_2 = require("@nestjs/common");
let SpecialtyService = class SpecialtyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(CreateSpecialtyDto) {
        return this.prisma.specialization.create({ data: CreateSpecialtyDto });
    }
    findAll() {
        return this.prisma.specialization.findMany();
    }
    findOne(id) {
        return this.prisma.specialization.findUnique({ where: { id } });
    }
    update(id, dto) {
        return this.prisma.specialization.update({ where: { id }, data: dto });
    }
    async remove(id) {
        const specialization = await this.prisma.specialization.findUnique({
            where: { id },
            include: {
                doctor: true,
            },
        });
        if (!specialization) {
            throw new common_2.NotFoundException(`Specialization with ID ${id} not found`);
        }
        if (specialization.doctor.length > 0) {
            throw new common_2.BadRequestException(`Cannot delete specialization "${specialization.title}" because it is assigned to ${specialization.doctor.length} doctor(s)`);
        }
        return await this.prisma.specialization.delete({
            where: { id },
        });
    }
};
exports.SpecialtyService = SpecialtyService;
exports.SpecialtyService = SpecialtyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpecialtyService);
//# sourceMappingURL=specialty.service.js.map