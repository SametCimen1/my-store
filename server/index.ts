import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from '@/server/schema'
import { users } from '@/server/schema';

// (process.env.POSTGRES_URL!) == (process.env.POSTGRES_URL as string)

export const db = drizzle(sql, {schema, logger: true});


// console.log("HERE")


// const  updateFunction = async() => {
//     await db.update(users).set({
//         role: "admin"
//     });
// }

// updateFunction();