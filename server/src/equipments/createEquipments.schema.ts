import { z } from "zod"

const owner_idSchema = z.number();
const equipment_classSchema = z.number();
const load_capacitySchema = z.number();
const divisionSchema = z.string().min(3).max(48);
const sectorSchema = z.string().min(3).max(48);

export const createEquipmenSchema = z.object({
        owner_id: owner_idSchema,
        equipment_class: equipment_classSchema,
        load_capacity: load_capacitySchema,
        division: divisionSchema,
        sector: sectorSchema,
})