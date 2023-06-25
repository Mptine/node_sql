import {createPool, sql as sqlObj, DatabasePool } from "slonik";
import dotenv from "dotenv"
export { sql as sqlObj } from "slonik";

dotenv.config()
/* One of the chosen extensions, wich helps on sql vizualization, doesn't work with sql.unsafe.
To work around this we imported the 'original' sql under the alias of sqlObj, and then we created a 
constant sql wich now represents sql.unsafe.
*/
export const sql = sqlObj.unsafe;


/* 
 Singleton, design pattern that ensures that only one instance of a certain object.
 Here we want to make sure we are not openning a new pool each time a query is made.
*/

let pool: DatabasePool;

/*
The function below is in it's default version, after this comment there will be the Singleton version.

async function getPool() {
    const pool = await createPool('postgresql://root:2345678@localhost:5432/eqp_db');
    return pool;
}
*/

//this one will be to my local docker image.
// export async function getPool() {
//     //pool will be undefined if it wasn't called yet henece it will be called for the first time, the next calling will have a DatabasePool type.
//     if (pool ===undefined) {
//         pool = await createPool(
//             'postgres://root:2345678@localhost:5432/eqp_db'
//             );
//     }    
//     console.log('Pool created')
//     return pool;
// }



//I had to use dotenv to safely(i hope so) send this to github. I'll send the content in the pdf.

export async function getPool() {
    //pool will be undefined if it wasn't called yet henece it will be called for the first time, the next calling will have a DatabasePool type.
    if (pool ===undefined) {
        pool = await createPool(
            `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@eqp-db.c27vk2jilazm.us-east-1.rds.amazonaws.com:5432/postgres?sslmode=no-verify`
            );
            console.log(process.env.DB_USER)
    }    
    console.log('Pool created')
    return pool;
}
