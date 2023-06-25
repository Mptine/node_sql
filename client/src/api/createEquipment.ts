import { api } from "./api";
import type { EquipmentsSimple } from "../../../shared/types";

export type PostEquipmentInput = {
    id: string,
    owner_id: string,
    equipment_class: string;
    load_capacity: string;
    division: string;
    sector: string;
};

export type PostEquipmentConv = {
  id: number;
  owner_id: number;
  equipment_class: number;
  load_capacity: number;
  division: string;
  sector: string;
  };
  

export type PostEquipmentOutput = {
  success: boolean;
  equipment: EquipmentsSimple;
};

export async function postEquipment(
    equipment: PostEquipmentInput
): Promise<PostEquipmentOutput> {

    const convertedEquip: PostEquipmentConv = {
      id: parseInt(equipment.id),
      owner_id: parseInt(equipment.owner_id),
      equipment_class: parseInt(equipment.equipment_class),
      load_capacity: parseInt(equipment.load_capacity),
      division: equipment.division,
      sector: equipment.sector,
      };

  const response = await api.post("/equipments", convertedEquip);
  return response.data;
}