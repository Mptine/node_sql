import toast from "react-simple-toasts";
import { deleteCertificate } from "../api/deleteCertificate";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";

async function onClickDelete(id: number) {
  console.log("Started");
  //Not sure why useNavigate was messing with the function, check this later.
  // const navigate = useNavigate();
  const response = await deleteCertificate(id);
  if (response.success) {
    toast("Successfully deleted.");
    // navigate("/");
    // console.log("worked");
  } else {
    toast("Something went wrong, try again");
    // console.log("didn't work");
  }
}

type DeleteButtonProps = {
  id: number;
};

export function DeleteButton(props: DeleteButtonProps) {
  return (
    <div
      className="hover:animate-bounce text-red-400 hover:text-red-600 hover:text-2xl w-6 flex items-center justify-center"
      onClick={async () => await onClickDelete(props.id)}>
      <RiDeleteBinFill />
    </div>
  );
}
