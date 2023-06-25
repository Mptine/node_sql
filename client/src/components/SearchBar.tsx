import { useState } from "react";
import { InputField } from "./InputField";
import { searchCertificates } from "../api/searchCertificates";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";

const defaultSearch = {
  limit: 10,
  offset: 0,
  search: "",
  order_by: "CREATED_AT",
  direction: "DESC",
};

export function SearchBar() {
  const [form, setForm] = useState(defaultSearch);

  const handleClick = (direction: string) => {
    setForm({ ...form, direction });
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await searchCertificates(form);
  }

  return (
    <>
      <form
        className="flex gap-2 mx-2 w-64 text-yellow-400 items-center "
        noValidate
        onSubmit={onSubmit}>
        <InputField
          title="Search"
          value={form.search}
          onChange={(search) => setForm({ ...form, search })}
          placeholder=""
        />
        <div
          className={`text-2xl ${
            form.direction === "DESC" ? "bg-yellow-400 text-black" : ""
          }`}
          onClick={() => handleClick("DESC")}>
          <HiMiniBarsArrowDown />
        </div>
        <div
          className={`text-2xl ${
            form.direction === "ASC" ? "bg-yellow-400 text-black" : ""
          }`}
          onClick={() => handleClick("ASC")}>
          <HiMiniBarsArrowUp />
        </div>

        <button
          type="submit"
          className="text-yellow-400 my-10 rounded-md uppercase font-extrabold text-2xl">
          <HiOutlineSearch />
        </button>
      </form>
    </>
  );
}
