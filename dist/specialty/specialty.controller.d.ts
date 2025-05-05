import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
export declare class SpecialtyController {
    private readonly specialtyService;
    constructor(specialtyService: SpecialtyService);
    create(createSpecialtyDto: CreateSpecialtyDto): import(".prisma/client").Prisma.Prisma__specializationClient<{
        id: string;
        title: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        title: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__specializationClient<{
        id: string;
        title: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateSpecialtyDto: UpdateSpecialtyDto): import(".prisma/client").Prisma.Prisma__specializationClient<{
        id: string;
        title: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): Promise<{
        id: string;
        title: string;
    }>;
}
