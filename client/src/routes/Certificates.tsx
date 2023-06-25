import { useState, useEffect } from "react";
import { Equipments } from "../../../shared/types";
import { useParams } from "react-router-dom";
import { getEquipments } from "../api/getEquipments";
import { ListCert } from "../components/ListCert";
import { SearchBar } from "../components/SearchBar";

const defaultEquipmentsList: Equipments[] = [];

export function CertificatesList() {
  const [equipData, setEquipData] = useState(defaultEquipmentsList);
  const params = useParams();
  useEffect(() => {
    getEquipments().then((equipData) => setEquipData(equipData));
  }, [params]);
  return (
    <div className=" w-1/2 items-center">
      <SearchBar />
      <ListCert equipments={equipData} />
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { Certificate } from "../../../shared/types";
// import { useParams } from "react-router-dom";
// import { getEquipments } from "../api/getEquipments";
// import { ListCert } from "../components/ListCert";
// import { InputField } from "../components/InputField";
// import { searchCertificates } from "../api/searchCertificates";
// import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
// import { HiOutlineSearch } from "react-icons/hi";

// const defaultEquipmentsList: Certificate[] = [];
// const defaultSearch = {
//   limit: 10,
//   offset: 0,
//   search: "",
//   order_by: "CREATED_AT",
//   direction: "DESC",
// };

// export function CertificatesList() {
//   const [equipData, setEquipData] = useState(defaultEquipmentsList);
//   const params = useParams();
//   const [form, setForm] = useState(defaultSearch);
//   const handleClick = (direction: string) => {
//     setForm({ ...form, direction });
//   };

//   async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     searchCertificates(form).then((equipData) =>
//       setEquipData(equipData.certificates)
//     );
//   }

//   useEffect(() => {
//     getEquipments().then((equipData) => setEquipData(equipData));
//   }, [params]);
//   return (
//     <div className=" w-1/2 items-center">
//       <div>
//         <form
//           className="flex gap-2 mx-2 w-64 text-yellow-400 items-center "
//           noValidate
//           onSubmit={onSubmit}>
//           <InputField
//             title="Search"
//             value={form.search}
//             onChange={(search: string) => setForm({ ...form, search })}
//             placeholder=""
//           />
//           <div
//             className={`text-2xl ${
//               form.direction === "DESC" ? "bg-yellow-400 text-black" : ""
//             }`}
//             onClick={() => handleClick("DESC")}>
//             <HiMiniBarsArrowDown />
//           </div>
//           <div
//             className={`text-2xl ${
//               form.direction === "ASC" ? "bg-yellow-400 text-black" : ""
//             }`}
//             onClick={() => handleClick("ASC")}>
//             <HiMiniBarsArrowUp />
//           </div>

//           <button
//             type="submit"
//             className="text-yellow-400 my-10 rounded-md uppercase font-extrabold text-2xl">
//             <HiOutlineSearch />
//           </button>
//         </form>
//       </div>
//       <ListCert equipments={equipData} />
//     </div>
//   );
// }
