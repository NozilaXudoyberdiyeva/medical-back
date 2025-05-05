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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PatientService = class PatientService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const patients = await this.prisma.patient.findMany({
            include: {
                doctor: {
                    include: {
                        specialization: true,
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
            },
        });
        return { patients, message: 'Get all patients!' };
    }
    async findOne(id) {
        const patient = await this.prisma.patient.findUnique({
            where: { id },
            include: {
                doctor: {
                    include: {
                        specialization: true,
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
            },
        });
        return { patient, message: 'Get this patient' };
    }
    async update(id, dto) {
        return this.prisma.patient.update({
            where: { id },
            data: {
                full_name: dto.full_name,
                tel_number: dto.tel_number,
                username: dto.username,
                password: dto.password,
                complaint: dto.complaint,
                ...(dto.doctorIds && {
                    doctor: {
                        set: dto.doctorIds.map((id) => ({ id })),
                    },
                }),
            },
        });
    }
    async remove(id) {
        const deletedPatient = await this.prisma.patient.delete({
            where: { id },
        });
        return { deletedPatient, message: 'Deleted patient!' };
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientService);
//# sourceMappingURL=patient.service.js.map