import { getPool, sql, sqlObj } from "../database";
import { Class } from "../../../shared/types";


export async function findEclassById(id: number){
  const pool = await getPool();
  try {
  const eclass = await pool.one(sql`
      SELECT * 
      FROM class
      WHERE e.id = ${id};
  `);
  return {
    eclass,
  };
} catch {
  return null;
}
}

export async function findEclass(): Promise<Class[]> {
  const pool = await getPool();
  const eclass = (await pool.many(sql`
    SELECT * 
    FROM class
    ORDER BY id ASC

  `));
  const result = eclass.map(item => {
    return {
      id: item.id,
      powered_by: item.powered_by,
      transmited_by: item.transmited_by,
      is_mobile: item.is_mobile,
      load_unit: item.load_unit,
    }

  })
  return result
}

//Dont want my user creating and deleting those...so no post and delet methods here.
//I should probably return some error or return some http...but i'll leave future me handle that.


