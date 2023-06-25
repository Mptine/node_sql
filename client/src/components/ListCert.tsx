import type { Equipments } from "../../../shared/types";
import { DeleteButton } from "./DeleteButton";

type EquipStaticProps = {
  equipments: Equipments[];
};

export function ListCert({ equipments }: EquipStaticProps) {
  return (
    <>
      {equipments.map((equip: Equipments, index: number) => {
        return (
          <div className=" my-2 p-2 flex bg-white bg-opacity-10 " key={index}>
            <div className=" text-white flex gap-2 text-xl w-fit">
              <div className="mx-4">
                <p>Certificate: {equip.id}</p>
                <p>Equipment Id: {equip.equipment_id}</p>
              </div>
              <div className="mx-4">
                <p>
                  Load Capacity: {equip.load_capacity} {equip.load_unit}
                </p>
              </div>
              <div className="mx-4">
                <p>Department: {equip.department}</p>
                <p>Sector: {equip.sector}</p>
              </div>
            </div>
            <DeleteButton id={equip.id} />
          </div>
        );
      })}
    </>
  );
}
