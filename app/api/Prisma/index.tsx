import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getPosts = async () => {
    return await prisma.post.findMany()
}

export const createPost = async (title: string, content: string, authorId: number) => {
    return await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
};

export default prisma;