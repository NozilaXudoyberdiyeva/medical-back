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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./../prisma.service");
const bcrypt_1 = require("bcrypt");
let DoctorService = class DoctorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const doctors = await this.prisma.doctor.findMany({
            include: {
                patient: true,
                specialization: true,
                retsept: {
                    include: {
                        patient: {
                            include: {
                                analyze: true,
                                retsept: true,
                            },
                        },
                        doctor: {
                            include: {
                                specialization: true,
                            },
                        },
                    },
                },
                analyze: {
                    include: {
                        patient: true,
                        doctor: {
                            include: {
                                specialization: true,
                            },
                        },
                    },
                },
            },
        });
        return { doctors, message: 'All doctors fetched successfully' };
    }
    async findOne(id) {
        const doctor = await this.prisma.doctor.findUnique({
            where: { id },
            include: {
                patient: {
                    include: {
                        retsept: true,
                        analyze: true,
                    },
                },
                specialization: true,
                retsept: {
                    include: {
                        patient: true,
                        doctor: {
                            include: {
                                specialization: true,
                            },
                        },
                    },
                },
                analyze: {
                    include: {
                        patient: true,
                        doctor: {
                            include: {
                                specialization: true,
                            },
                        },
                    },
                },
            },
        });
        if (!doctor) {
            throw new Error(`Doctor with ID ${id} not found`);
        }
        return { doctor, message: `Doctor with ID ${id} fetched successfully` };
    }
    async update(id, dto) {
        const { password, ...rest } = dto;
        const data = { ...rest };
        if (password) {
            data.password = await bcrypt_1.default.hash(password, 10);
        }
        return this.prisma.doctor.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.prisma.doctor.delete({
            where: { id },
        });
        return { message: `Doctor with ID ${id} deleted successfully` };
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map