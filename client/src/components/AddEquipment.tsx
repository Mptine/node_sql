
import { InputField } from "./InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { postEquipment } from "../api/createEquipment";

const defaultEquipment = {
    id: "",
    owner_id: "",
    equipment_class: "",
    load_capacity: "",
    division: "",
    sector: "",
};

export function AddEquipment() {
    const navigate = useNavigate();
    const [form, setForm] = useState(defaultEquipment);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await postEquipment(form);
        if (response.success) {
            toast("Equipment sucessfully registred.");
            navigate("/");
        } else {
            toast("Something went wrong, try again.");
        }
    }

    return (
        <div className=" w-4/12">
            <h1 className="text-left text-2xl font-bold my-4">Register new equipment:</h1>
            <div className="w-full flex justify-start">
                <div className="w-64 mx-4">
                    <form
                        className="flex flex-col gap-2 mx-2 w-64"
                        noValidate
                        onSubmit={onSubmit}>
                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex gap-6">
                                <InputField
                                    title="Owner"
                                    value={form.owner_id}
                                    onChange={(owner_id) => setForm({ ...form, owner_id })}
                                    placeholder=""
                                />
                                <InputField
                                    title="Equipment Class"
                                    value={form.equipment_class}
                                    onChange={(equipment_class) => setForm({ ...form, equipment_class })}
                                    placeholder=""
                                />
                            </div>
                            <div className="flex gap-6">
                                <InputField
                                    title="Load Capacity"
                                    value={form.load_capacity}
                                    onChange={(load_capacity) => setForm({ ...form, load_capacity })}
                                    placeholder=""
                                />
                                <InputField
                                    title="Division"
                                    value={form.division}
                                    onChange={(division) => setForm({ ...form, division })}
                                    placeholder=""
                                />
         
                            </div>
                            <InputField
                                    title="Sector"
                                    value={form.sector}
                                    onChange={(sector) => setForm({ ...form, sector })}
                                    placeholder=""
                                />

                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-black my-10 rounded-md uppercase font-extrabold text-2xl h-20">
                            Submit
                        </button>
                    </form></div>

            </div>
        </div>
    );
}