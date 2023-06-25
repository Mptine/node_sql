import { getPool, sql, sqlObj } from "../database";
import { Certificate } from "../../../shared/types";
import { createCertificateSchema } from "./createCertificate.schema";

type FindCertificateParams = {
  limit?: number;
  offset?: number;
  search?: string;
  order_by?: string;
  direction?: string;
};

export async function findCertificates() {
  const pool = await getPool();

  const orderByClause = sqlObj.fragment([`ORDER BY id DESC`]);
  const certificate = await pool.many(sql`
      SELECT * FROM certificate
    ${orderByClause}
  `);
  return {
    certificate,
  };
}

export async function findCertificateById(id: number) {
  const pool = await getPool();
  try {
    const certificates = (await pool.any(sql`
    SELECT * FROM certificate 
    WHERE id = ${id}
    ORDER BY created_at DESC
    LIMIT 1;

  `)) as any;
    return certificates;
  } catch {
    return null;
  }
}

export async function deleteCertificateById(id: number) {
  const pool = await getPool();
  const certificate = await findCertificateById(id);
  const results = await pool.query(sql`
    DELETE FROM certificate WHERE id = ${id}
  `);

  const success = results.rowCount === 1;

  return {
    success,
    certificate,
  };
}

export async function createCertificate(
  certificateData: Omit<Certificate, "id" | "created_at">
) {
  const validation = await createCertificateSchema.safeParseAsync(
    certificateData
  );
  console.log(validation);
  if (validation.success === false) {
    return {
      success: false,
      certificate: null,
      errors: validation.error.errors,
    };
  }
  const { equipment_id, inspector, project_id } = validation.data;

  const pool = await getPool();
  const certificate: Certificate = await pool.one(sql`
    INSERT INTO certificate (equipment_id, inspector, project_id)
    VALUES(
      ${equipment_id},
      ${inspector},
      ${project_id}
    )
    RETURNING *
  `);

  return {
    success: true,
    certificate,
    errors: [],
  };
}

//

export async function CertificatesSearch({
  limit = 10,
  offset = 0,
  search = "",
  order_by = "CREATED_AT",
  direction = "DESC",
}: FindCertificateParams = {}) {
  const pool = await getPool();
  const partialSearch = `%${search}%`;
  const whereClause = sqlObj.fragment`
    WHERE MESSAGE ILIKE ${partialSearch}
  `;
  const orderByClause = sqlObj.fragment([`ORDER BY ${order_by} ${direction}`]);
  const certificates = await pool.many(sql`
    SELECT
      id,
      created_at,
      equipment_id,
      inspector,
      project_id,
    from certificate
    ${whereClause}
    ${orderByClause}
    limit ${limit} offset ${offset}
  `);
  const count = await pool.oneFirst(sql`
    select count(*) from posts ${whereClause}
  `);

  return {
    count,
    certificates,
  };
}
