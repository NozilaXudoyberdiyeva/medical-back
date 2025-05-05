import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<{
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
