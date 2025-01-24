const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const CreateUser = async (userdata) => {
  try {
    const main = await prisma.individuals.create({
      data: userdata,
    });
    return main;
  } catch (error) {
    console.log("Error while creating user", error);
  }
};

module.exports = {
  CreateUser,
};
