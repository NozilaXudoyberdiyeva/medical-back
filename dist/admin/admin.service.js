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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt_1 = require("bcrypt");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStats() {
        const doctorCount = await this.prisma.doctor.count();
        const patientCount = await this.prisma.patient.count();
        const specializationCount = await this.prisma.specialization.count();
        return {
            doctorCount,
            patientCount,
            specializationCount,
        };
    }
    async findAll() {
        const admins = await this.prisma.admin.findMany();
        return {
            message: 'All admins retrieved successfully!',
            admins,
        };
    }
    async findOne(id) {
        const admin = await this.prisma.admin.findUnique({ where: { id } });
        if (!admin) {
            throw new common_1.NotFoundException(`Admin with ID ${id} not found`);
        }
        return {
            message: `Admin with ID ${id} found`,
            admin,
        };
    }
    async update(id, dto) {
        const data = {
            full_name: dto.full_name,
            tel_number: dto.tel_number,
            username: dto.username,
        };
        if (dto.password?.trim()) {
            data.password = await bcrypt_1.default.hash(dto.password, 10);
        }
        const admin = await this.prisma.admin.update({
            where: { id },
            data: dto,
        });
        return {
            message: `Admin with ID ${id} updated successfully`,
            admin,
        };
    }
    async remove(id) {
        const admin = await this.prisma.admin.delete({ where: { id } });
        return {
            message: `Admin with ID ${id} deleted successfully`,
            admin,
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map