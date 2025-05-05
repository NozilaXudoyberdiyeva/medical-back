import { DoctorService } from './doctor.service';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorService);
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
    update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<{
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
