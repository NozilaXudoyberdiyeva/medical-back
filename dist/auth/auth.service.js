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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const admin = await this.prisma.admin.findUnique({ where: { username } });
        if (admin && (await bcrypt.compare(password, admin.password))) {
            return {
                access_token: this.jwtService.sign({
                    sub: admin.id,
                    role: 'admin',
                    full_name: admin.full_name,
                    username: admin.username,
                }),
                message: 'Login successful!',
            };
        }
        const doctor = await this.prisma.doctor.findUnique({ where: { username } });
        if (doctor && (await bcrypt.compare(password, doctor.password))) {
            return {
                access_token: this.jwtService.sign({
                    sub: doctor.id,
                    role: 'doctor',
                    full_name: doctor.full_name,
                    username: doctor.username,
                }),
                message: 'Login successful',
            };
        }
        const patient = await this.prisma.patient.findUnique({
            where: { username },
        });
        if (patient && (await bcrypt.compare(password, patient.password))) {
            return {
                access_token: this.jwtService.sign({
                    sub: patient.id,
                    role: 'patient',
                    full_name: patient.full_name,
                    username: patient.username,
                }),
                message: 'Login successful',
            };
        }
        throw new common_1.UnauthorizedException('Invalid credentials');
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map