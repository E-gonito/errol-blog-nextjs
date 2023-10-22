import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getPosts = async () => {
    return await prisma.post.findMany()
}

export default prisma;