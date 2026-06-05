import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import "dotenv/config";


//new postgres connection pool
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

//wrapping the pool in prisma-postgres adapter
const adapter = new PrismaPg(pool);

//Hot Reloading(one global instance of prisma client)
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}