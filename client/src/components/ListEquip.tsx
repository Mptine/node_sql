import type { EquipmentsSimple } from "../../../shared/types";
import { CascadeDeleteButton } from "./CascadeDeleteButton";

type EquipStaticProps = {
  equipments: EquipmentsSimple[];
};

export function ListEquip({ equipments }: EquipStaticProps) {
  return (
    <>
      {equipments.map((equip: EquipmentsSimple, index: number) => {
        return (
          <div
            className=" my-2 p-2  text-white flex gap-2 bg-white bg-opacity-10 justify-between w-full"
            key={index}>
            <div className="flex text-xl w-fit justify-around">
              <div className="mx-4 w-40">
                <p>Id: {equip.id}</p>
                <p>Owner Id: {equip.owner_id}</p>
              </div>
              <div className="mx-4 w-72">
                <p>Class: {equip.equipment_class}</p>
                <p>Load Capacity: {equip.load_capacity}</p>
              </div>
              <div className="mx-4 w-72">
                <p className=" truncate">Department: {equip.division}</p>
                <p className=" truncate">Sector: {equip.sector}</p>
              </div>
            </div>
            <CascadeDeleteButton id={equip.id} />
          </div>
        );
      })}
    </>
  );
}
