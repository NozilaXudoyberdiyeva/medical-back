import { RetseptService } from './retsept.service';
import { CreateRetseptDto } from './dto/create-retsept.dto';
import { UpdateRetseptDto } from './dto/update-retsept.dto';
export declare class RetseptController {
    private readonly retseptService;
    constructor(retseptService: RetseptService);
    create(createRetseptDto: CreateRetseptDto): Promise<{
        message: string;
        retsept: {
            id: string;
            dori: string;
            necha_mahal: number;
            davomiylik: number;
            ichish_vaqti: string;
            doctorId: string;
            patientId: string;
            nima_uchun: string;
        };
    }>;
    findAll(): Promise<{
        message: string;
        retsepts: ({
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
            id: string;
            dori: string;
            necha_mahal: number;
            davomiylik: number;
            ichish_vaqti: string;
            doctorId: string;
            patientId: string;
            nima_uchun: string;
        })[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        retsept: {
            patient: {
                full_name: string;
                complaint: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
            };
            doctor: {
                full_name: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
                specializationId: string;
            };
        } & {
            id: string;
            dori: string;
            necha_mahal: number;
            davomiylik: number;
            ichish_vaqti: string;
            doctorId: string;
            patientId: string;
            nima_uchun: string;
        };
    }>;
    update(id: string, updateRetseptDto: UpdateRetseptDto): Promise<{
        message: string;
        retsept: {
            id: string;
            dori: string;
            necha_mahal: number;
            davomiylik: number;
            ichish_vaqti: string;
            doctorId: string;
            patientId: string;
            nima_uchun: string;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        deleted: {
            id: string;
            dori: string;
            necha_mahal: number;
            davomiylik: number;
            ichish_vaqti: string;
            doctorId: string;
            patientId: string;
            nima_uchun: string;
        };
    }>;
}
