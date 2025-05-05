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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_admin_dto_1 = require("./dto/register-admin.dto");
const register_doctor_dto_1 = require("./dto/register-doctor.dto");
const register_patient_dto_1 = require("./dto/register-patient.dto");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("../common/user.service");
let AuthController = class AuthController {
    constructor(authService, prisma, userService) {
        this.authService = authService;
        this.prisma = prisma;
        this.userService = userService;
    }
    async login(dto) {
        return this.authService.validateUser(dto.username, dto.password);
    }
    async registerAdmin(dto) {
        await this.userService.checkUsernameUnique(dto.username);
        const password = await bcrypt.hash(dto.password, 10);
        const admin = await this.prisma.admin.create({
            data: { ...dto, password },
        });
        return { message: 'Admin registered', admin };
    }
    async registerDoctor(dto) {
        await this.userService.checkUsernameUnique(dto.username);
        const password = await bcrypt.hash(dto.password, 10);
        const doctor = await this.prisma.doctor.create({
            data: { ...dto, password },
        });
        return { message: 'Doctor registered', doctor };
    }
    async registerPatient(dto) {
        await this.userService.checkUsernameUnique(dto.username);
        const password = await bcrypt.hash(dto.password, 10);
        const patient = await this.prisma.patient.create({
            data: {
                full_name: dto.full_name,
                tel_number: dto.tel_number,
                username: dto.username,
                password,
                complaint: dto.complaint,
                doctor: {
                    connect: dto.doctorIds?.map((id) => ({ id })) || [],
                },
            },
        });
        return { message: 'Patient registered', patient };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register/admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_admin_dto_1.RegisterAdminDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerAdmin", null);
__decorate([
    (0, common_1.Post)('register/doctor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_doctor_dto_1.RegisterDoctorDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerDoctor", null);
__decorate([
    (0, common_1.Post)('register/patient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_patient_dto_1.RegisterPatientDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerPatient", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        prisma_service_1.PrismaService,
        user_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map