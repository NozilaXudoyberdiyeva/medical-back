import { PatientService } from './patient.service';
import { UpdatePatientDto } from './dto/update-patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    findAll(): Promise<import("./entities/patient.entity").Patient>;
    findOne(id: string): Promise<import("./entities/patient.entity").Patient>;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<{
        full_name: string;
        complaint: string;
        tel_number: number;
        username: string;
        password: string;
        id: string;
    }>;
    remove(id: string): Promise<import("./entities/patient.entity").Patient>;
}
