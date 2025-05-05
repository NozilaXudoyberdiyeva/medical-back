import { PrismaService } from '../prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    checkUsernameUnique(username: string): Promise<void>;
}
