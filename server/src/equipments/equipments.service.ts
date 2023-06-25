import { getPool, sql, sqlObj } from "../database";
import { Certificate, Equipments, EquipmentsSimple } from "../../../shared/types";
import { createEquipmenSchema } from "./createEquipments.schema";



//The query below works fine in the SQL administration software(Beaver), but god knows why here it shows only entry id=3.
export async function findEquipmentsById(id: number) {

  const pool = await getPool();
  try {
    const equipment = await pool.one(sql`
      SELECT * FROM equipments e
      JOIN class cl ON e.equipment_class = cl.id
      JOIN certificate c ON e.id = c.equipment_id
      JOIN projects p ON c.project_id = p.id
      JOIN users u ON c.inspector = u.id
      JOIN users u2 ON p.client_id = u2.id
      JOIN companies co ON u.work_at = co.id
      WHERE e.id = ${id};
      `);
    return equipment;
  } catch {
    return null;
  }
}


export async function findEquipments(): Promise<Equipments[]> {
  const pool = await getPool();

  const orderByClause = sqlObj.fragment([
    `ORDER BY c.created_at ASC`,
  ]);
  const equipments = await pool.many(sql`
SELECT equipment_id, id, created_at, load_capacity, department, sector, load_unit
FROM (
  SELECT c.equipment_id, c.id, c.created_at, e.load_capacity, u.department, u.sector, cl.load_unit,
         ROW_NUMBER() OVER (PARTITION BY c.equipment_id ORDER BY c.id) AS rn
  FROM certificate c
  JOIN equipments e ON c.equipment_id = e.id
  JOIN class cl ON e.equipment_class = cl.id
  JOIN projects p ON c.project_id = p.id
  JOIN users u ON c.inspector = u.id
  JOIN users u2 ON p.client_id = u2.id
  JOIN companies co ON u.work_at = co.id
) subquery
WHERE rn = 1
ORDER BY id desc;


  `);
  const result = equipments.map(item => {
    return {
      id: item.id,
      owner_id: item.owner_id,
      equipment_class: item.equipment_class,
      load_capacity: item.load_capacity,
      division: item.division,
      sector: item.sector,
      powered_by: item.powered_by,
      transmited_by: item.transmited_by,
      is_mobile: item.is_mobile,
      load_unit: item.load_unit,
      created_at: item.created_at,
      equipment_id: item.equipment_id,
      inspector: item.inspector,
      project_id: item.project_id,
      started_at: item.started_at,
      finished_at: item.finished_at,
      client_id: item.client_id,
      type: item.type,
      email: item.email,
      phone: item.phone,
      work_at: item.work_at,
      department: item.department,
      company: item.company,
      branch: item.branch
    }

  })
  return result
}


export async function findEquipmentsSimple(): Promise<EquipmentsSimple[]> {
  const pool = await getPool();
  const equipments = await pool.many(sql`
SELECT *
FROM equipments
ORDER BY id desc;


  `);
  const result = equipments.map(item => {
    return {
      id: item.id,
      owner_id: item.owner_id,
      equipment_class: item.equipment_class,
      load_capacity: item.load_capacity,
      division: item.division,
      sector: item.sector,
      powered_by: item.powered_by,
      transmited_by: item.transmited_by,
      is_mobile: item.is_mobile,
      load_unit: item.load_unit,
      created_at: item.created_at,
      equipment_id: item.equipment_id,
      inspector: item.inspector,
      project_id: item.project_id,
      started_at: item.started_at,
      finished_at: item.finished_at,
      client_id: item.client_id,
      type: item.type,
      email: item.email,
      phone: item.phone,
      work_at: item.work_at,
      department: item.department,
      company: item.company,
      branch: item.branch
    }

  })
  return result
}



export async function deleteEquipmentsById(id: number) {
  const pool = await getPool();
  const equipments = await findEquipmentsById(id);
  const results = await pool.query(sql`
    delete from equipments where id = ${id}
  `);

  const success = results.rowCount === 1;

  return {
    success,
    equipments,
  };
}

export async function createEquipments(equipmentsData: Omit<Equipments, "id" | "created_at">) {
  const validation = await createEquipmenSchema.safeParseAsync(equipmentsData);
  console.log(validation)
  if (validation.success === false) {
    return {
      success: false,
      certificate: null,
      errors: validation.error.errors,

    }
  }
  const { owner_id, equipment_class, load_capacity, division, sector } = validation.data

  const pool = await getPool();
  const equipments: Equipments = await pool.one(sql`
    INSERT INTO equipments (owner_id, equipment_class, load_capacity, division, sector)
    VALUES(
      ${owner_id},
      ${equipment_class},
      ${load_capacity},
      ${division},
      ${sector}
    )
    returning *
  `);


  return {
    success: true,
    equipments,
    errors: []
  };
}

