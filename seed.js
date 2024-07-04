const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "kebinou",
      password: "$2y$10$UA8AgR3yynAvWEDUx8.Bi.pXP41tNhMNEzz.Vhob8WTxkYU60zCx.",
      // Add any other fields you have in your user model
    },
  });

  console.log("User added successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
