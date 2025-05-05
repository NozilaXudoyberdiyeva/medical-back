import { CreateAnalyzeDto } from './dto/create-analyze.dto';
import { UpdateAnalyzeDto } from './dto/update-analyze.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AnalyzeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAnalyzeDto: CreateAnalyzeDto): Promise<{
        message: string;
        analyze: {
            result: string;
            id: string;
            doctorId: string;
            patientId: string;
            type: string;
        };
    }>;
    findAll(): Promise<{
        message: string;
        analyzes: ({
            patient: {
                full_name: string;
                complaint: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
            };
            doctor: {
                specialization: {
                    id: string;
                    title: string;
                };
            } & {
                full_name: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
                specializationId: string;
            };
        } & {
            result: string;
            id: string;
            doctorId: string;
            patientId: string;
            type: string;
        })[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        analyze: {
            patient: {
                full_name: string;
                complaint: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
            };
            doctor: {
                specialization: {
                    id: string;
                    title: string;
                };
            } & {
                full_name: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
                specializationId: string;
            };
        } & {
            result: string;
            id: string;
            doctorId: string;
            patientId: string;
            type: string;
        };
    }>;
    update(id: string, updateAnalyzeDto: UpdateAnalyzeDto): Promise<{
        message: string;
        analyze: {
            result: string;
            id: string;
            doctorId: string;
            patientId: string;
            type: string;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        analyze: {
            result: string;
            id: string;
            doctorId: string;
            patientId: string;
            type: string;
        };
    }>;
}
