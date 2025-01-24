const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const CheckUserIsIndividual = async (email) => {
  try {
    const data = await prisma.individuals.findUnique({
      where: {
        email: email,
      },
    });

    if (data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const FetchUser = async (email) => {
  try {
    const data = await prisma.individuals.findUnique({
      where: {
        email: email,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { FetchUser, CheckUserIsIndividual };
