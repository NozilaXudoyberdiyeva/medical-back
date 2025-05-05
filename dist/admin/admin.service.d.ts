import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getStats(): Promise<{
        doctorCount: number;
        patientCount: number;
        specializationCount: number;
    }>;
    findAll(): Promise<{
        message: string;
        admins: {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
        }[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        admin: {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
        };
    }>;
    update(id: string, dto: UpdateAdminDto): Promise<{
        message: string;
        admin: {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        admin: {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
        };
    }>;
}
