import { z } from "zod"

const equipment_idSchema = z.number();
const inspectorSchema = z.number();
const project_idSchema = z.number();

export const createCertificateSchema = z.object({
        equipment_id: equipment_idSchema,
        inspector: inspectorSchema,
        project_id: project_idSchema,
})