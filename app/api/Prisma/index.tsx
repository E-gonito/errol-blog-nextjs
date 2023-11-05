import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getPosts = async () => {
    return await prisma.post.findMany()
}

export const findUserByAuth0Id = async (auth0Id: string) => {
    return await prisma.user.findUnique({
      where: {
        auth0Id,
      },
    });
};

export const createUserIfNotExist = async (auth0Id: string, email: string, name: string) => {
  let user = await findUserByAuth0Id(auth0Id);
  if (!user) {
    user = await createUser(auth0Id, email, name);
  }
  return user;
};

export const createPost = async (title: string, content: string, authorId: number) => {
    return await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
};

export const createUser = async (auth0Id: string, email: string, name: string) => {
    return await prisma.user.create({
        data: {
            auth0Id,
            email,
            name,
        },
    });
};

export default prisma;