import { useState, useEffect } from "react";
import { EquipmentsSimple } from "../../../shared/types";
import { useParams } from "react-router-dom";
import { getEquipmentsSimple } from "../api/getEquipments";
import { ListEquip } from "../components/ListEquip";

const defaultEquipmentsList: EquipmentsSimple[] = [];

export function EquipmentsList() {
  const [equipData, setEquipData] = useState(defaultEquipmentsList);
  const params = useParams();
  useEffect(() => {
    getEquipmentsSimple().then((equipData) => setEquipData(equipData));
  }, [params]);
  return (
    <div className=" w-10/12 items-center">
      <ListEquip equipments={equipData} />
    </div>
  );
}
