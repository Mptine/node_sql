import { getPool, sql, sqlObj } from "../database";
import { User } from "../../../shared/types";


export async function findUsers(){
  const pool = await getPool();
  const users = await pool.many(sql`
      SELECT * 
      FROM users
      ORDER BY id ASC
  `);
  const result = users.map(item => {
    return {
      id: item.id,
      type: item.type,
      email: item.email,
      phone: item.phone,
      work_at: item.work_at,
      department: item.department,
      sector: item.sector,
    }

  })
  return result
}

export async function findUserById(id: number){
  const pool = await getPool();
  try{  const users = await pool.any(sql`
  SELECT * 
  FROM users 
  WHERE id = ${id}
  ORDER BY id DESC
  LIMIT 1;

`);
return {
  users,
};
} catch {
  return null;
}}


//Dont want my user creating and deleting those...so no post and delet methods here.
//I should probably return some error or return some http...but i'll leave future me handle that.


