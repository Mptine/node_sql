import { api } from "./api";
import { EquipmentsSimple } from "../../../shared/types";

export type DeleteEquipmentsSimpleOutput = {
  success: boolean;
  equipment: EquipmentsSimple;
};

export async function deleteEquiment(
  id: number
): Promise<DeleteEquipmentsSimpleOutput> {
  const res = await api.delete(`/equipments/${id}`);
  const equipment = res.data;
  return equipment;
}
