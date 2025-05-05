import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { RegisterDoctorDto } from './dto/register-doctor.dto';
import { RegisterPatientDto } from './dto/register-patient.dto';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/common/user.service';
export declare class AuthController {
    private authService;
    private prisma;
    private userService;
    constructor(authService: AuthService, prisma: PrismaService, userService: UserService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        message: string;
    }>;
    registerAdmin(dto: RegisterAdminDto): Promise<{
        message: string;
        admin: {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
        };
    }>;
    registerDoctor(dto: RegisterDoctorDto): Promise<{
        message: string;
        doctor: {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
            specializationId: string;
        };
    }>;
    registerPatient(dto: RegisterPatientDto): Promise<{
        message: string;
        patient: {
            full_name: string;
            complaint: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
        };
    }>;
}
