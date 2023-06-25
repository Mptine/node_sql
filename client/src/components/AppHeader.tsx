import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";

export function AppHeader() {
  return (
    <div className="fixed top-0 flex shadow-sm shadow-transparent h-14 items-center justify-start w-screen bg-[#3e3e42]">
      <div className=" w-2/12"></div>
      <div className="flex bg-yellow-500">
        <Link className=" text-4xl font-bold text-[#3e3e42]" to="/">
          <IoMdCopy />
        </Link>
        <Link className=" text-2xl font-bold mr-2 text-[#3e3e42]" to="/">
          Home
        </Link>
      </div>
      <Link className=" ml-20 mr-20  text-yellow-500" to="/certificates">
        Certificates
      </Link>
      <Link className=" ml-20 mr-20  text-yellow-500" to="/equipments">
        Equipments
      </Link>
      <Link className=" ml-20 mr-20  text-yellow-500" to="/others">
        Other Info
      </Link>
    </div>
  );
}