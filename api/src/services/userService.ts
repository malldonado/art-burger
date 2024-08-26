import prisma from "../prisma/client";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (email: string, name: string) => {
  return await prisma.user.create({
    data: {
      email,
      name,
    },
  });
};
