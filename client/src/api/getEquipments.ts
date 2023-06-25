import { api } from "./api";
import { Equipments, EquipmentsSimple } from "../../../shared/types";

//This one should be correctly named after Certificates, eventhough it also shows equipments.
export async function getEquipments(): Promise<Equipments[]> {
  const res = await api.get("/equipments");
  const equipments = res.data;
  return equipments;
}

//This is a temporary fix.
export async function getEquipmentsSimple(): Promise<EquipmentsSimple[]> {
  const res = await api.get("/equipments/simple");
  const equipments = res.data;
  return equipments;
}
