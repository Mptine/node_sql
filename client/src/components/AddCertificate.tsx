import { InputField } from "./InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { postCertificate } from "../api/createCertificate";

const defaultCertificate = {
    equipment_id: "",
    created_at: "",
    inspector: "",
    project_id: "",
};

export function AddCertificate() {
    const navigate = useNavigate();
    const [form, setForm] = useState(defaultCertificate);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await postCertificate(form);
        if (response.success) {
          toast("Certificate sucessfully registred.");
          navigate("/");
        } else {
          toast("Something went wrong, try again.");
        }
      }

    return (
        <div className="w-4/12">
            <h1 className="text-left text-2xl font-bold my-4">Register new certificate:</h1>
            <div className="w-full flex justify-start">
                <div className="w-64 mx-4">
                    <form
                        className="flex flex-col gap-2 mx-2 w-64"
                        noValidate
                        onSubmit={onSubmit}>
                        <div className="flex flex-col gap-6">
                            <InputField
                                title="Equipment Serial/Id"
                                value={form.equipment_id}
                                onChange={(equipment_id) => setForm({ ...form, equipment_id })}
                                placeholder=""
                            />

                            <InputField
                                title="Inspector"
                                value={form.inspector}
                                onChange={(inspector) => setForm({ ...form, inspector })}
                                placeholder=""
                            />
                            <InputField
                                title="Project Nº"
                                value={form.project_id}
                                onChange={(project_id) => setForm({ ...form, project_id })}
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