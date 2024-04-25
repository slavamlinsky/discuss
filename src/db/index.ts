// import { PrismaClient } from "@prisma/client";
// export const db = new PrismaClient();

import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

const getPrismaClient = () => {
  if (!db) {
    console.log("New DB instance");
    db = new PrismaClient();
  }
  console.log("Cached DB instance");
  return db;
};

export default getPrismaClient();
