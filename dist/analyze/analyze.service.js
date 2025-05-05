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
exports.AnalyzeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AnalyzeService = class AnalyzeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAnalyzeDto) {
        const analyze = await this.prisma.analyze.create({
            data: createAnalyzeDto,
        });
        return {
            message: 'Analyze created successfully!',
            analyze,
        };
    }
    async findAll() {
        const analyzes = await this.prisma.analyze.findMany({
            include: {
                patient: true,
                doctor: {
                    include: {
                        specialization: true,
                    },
                },
            },
        });
        return {
            message: 'All analyzes retrieved successfully!',
            analyzes,
        };
    }
    async findOne(id) {
        const analyze = await this.prisma.analyze.findUnique({
            where: { id },
            include: {
                patient: true,
                doctor: {
                    include: {
                        specialization: true,
                    },
                },
            },
        });
        if (!analyze) {
            throw new common_1.NotFoundException(`Analyze with ID ${id} not found`);
        }
        return {
            message: `Analyze with ID ${id} found`,
            analyze,
        };
    }
    async update(id, updateAnalyzeDto) {
        const analyze = await this.prisma.analyze.update({
            where: { id },
            data: updateAnalyzeDto,
        });
        return {
            message: `Analyze with ID ${id} updated successfully`,
            analyze,
        };
    }
    async remove(id) {
        const analyze = await this.prisma.analyze.delete({
            where: { id },
        });
        return {
            message: `Analyze with ID ${id} deleted successfully`,
            analyze,
        };
    }
};
exports.AnalyzeService = AnalyzeService;
exports.AnalyzeService = AnalyzeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyzeService);
//# sourceMappingURL=analyze.service.js.map