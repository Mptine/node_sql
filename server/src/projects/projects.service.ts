import { getPool, sql, sqlObj } from "../database";
import { Project } from "../../../shared/types";


export async function findProjects(){
  const pool = await getPool();
  const projects = await pool.many(sql`
      SELECT * 
      FROM projects
      ORDER BY id DESC
  `);
  return {
    projects,
  };
}

export async function findProjectById(id: number): Promise<Project[]> {
  const pool = await getPool();
  const projects = (await pool.any(sql`
    SELECT * 
    FROM projects 
    WHERE id = ${id}
    ORDER BY id DESC
    LIMIT 1;

  `)) as any;
  return projects;
}

//Dont want my user creating and deleting those...so no post and delet methods here.
//I should probably return some error or return some http...but i'll leave future me handle that.


