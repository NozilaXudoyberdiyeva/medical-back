import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma.service';
import { Patient } from './entities/patient.entity';
export declare class PatientService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Patient>;
    findOne(id: string): Promise<Patient>;
    update(id: string, dto: UpdatePatientDto): Promise<{
        full_name: string;
        complaint: string;
        tel_number: number;
        username: string;
        password: string;
        id: string;
    }>;
    remove(id: string): Promise<Patient>;
}
