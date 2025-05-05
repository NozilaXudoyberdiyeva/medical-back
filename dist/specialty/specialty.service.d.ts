import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { PrismaService } from './../prisma.service';
export declare class SpecialtyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(CreateSpecialtyDto: CreateSpecialtyDto): import(".prisma/client").Prisma.Prisma__specializationClient<{
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
    update(id: string, dto: UpdateSpecialtyDto): import(".prisma/client").Prisma.Prisma__specializationClient<{
        id: string;
        title: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): Promise<{
        id: string;
        title: string;
    }>;
}
