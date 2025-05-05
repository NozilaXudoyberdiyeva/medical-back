import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from './../prisma.service';
export declare class DoctorService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        doctors: ({
            patient: {
                full_name: string;
                complaint: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
            }[];
            specialization: {
                id: string;
                title: string;
            };
            retsept: ({
                patient: {
                    retsept: {
                        id: string;
                        dori: string;
                        necha_mahal: number;
                        davomiylik: number;
                        ichish_vaqti: string;
                        doctorId: string;
                        patientId: string;
                        nima_uchun: string;
                    }[];
                    analyze: {
                        result: string;
                        id: string;
                        doctorId: string;
                        patientId: string;
                        type: string;
                    }[];
                } & {
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
            analyze: ({
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
        } & {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
            specializationId: string;
        })[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        doctor: {
            patient: ({
                retsept: {
                    id: string;
                    dori: string;
                    necha_mahal: number;
                    davomiylik: number;
                    ichish_vaqti: string;
                    doctorId: string;
                    patientId: string;
                    nima_uchun: string;
                }[];
                analyze: {
                    result: string;
                    id: string;
                    doctorId: string;
                    patientId: string;
                    type: string;
                }[];
            } & {
                full_name: string;
                complaint: string;
                tel_number: number;
                username: string;
                password: string;
                id: string;
            })[];
            specialization: {
                id: string;
                title: string;
            };
            retsept: ({
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
            analyze: ({
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
        } & {
            full_name: string;
            tel_number: number;
            username: string;
            password: string;
            id: string;
            specializationId: string;
        };
        message: string;
    }>;
    update(id: string, dto: UpdateDoctorDto): Promise<{
        full_name: string;
        tel_number: number;
        username: string;
        password: string;
        id: string;
        specializationId: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
