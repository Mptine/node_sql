import { AddCertificate } from "../components/AddCertificate";
import { AddEquipment } from "../components/AddEquipment";


export function Home() {
  return (
    <>
      <div className=" w-max h-screen text-white bg-[#272728] border-l border-[#3e3e42] p-4">
        <div>
          <p className=" text-slate-500">{"//Fix the code below so that it doesn't look obvious that you are reusing code."}</p>
          <span className="font-bold align-top text-4xl my-4">
            <span className="inline-block">
              {"Welcome to "}
              <span className="line-through">CopyBin</span>
              <span>, this page is definitely not ,</span>
              <span className="line-through">a cheap imitation
                of,</span>
              <a
                className="inline-block ml-2 mt-px text-red-400 line-through"
                href="https://pastebin.com">
                pastebin.com
              </a>
            </span>

          </span>
          <p className="font-bold align-top text-4xl my-4">Reutilization of an old page.</p>
          <p className=" text-xl my-4 line-through">
            Feel free to leave your note below, or to browse recent public
            notes.
          </p>
          <p className=" text-xl my-4">
            Create a new equipment or certificate entry below.
          </p>
        </div>
        <div className="flex flex-row h-max">
        </div>
        <div className="flex justify-center items-center w-full">
          <AddCertificate />
          <AddEquipment />
        </div>

      </div>
    </>
  );
}