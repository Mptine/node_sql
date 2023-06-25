import type { Class } from "../../../shared/types";

type ClassStaticProps = {
  eclass: Class[];
};

//I only now realise what a bad choice was having a field named 'class'

export function EclassList({ eclass }: ClassStaticProps) {
  console.log(eclass)

  return (
    <div className="w-full">
      <h1 className="text-4xl fonte-extrabold text-white p-4">Equipment Classes:</h1>
      <div className=" my-2 p-2 flex w-fit flex-col px-4">
      <div className=" text-white flex gap-2 bg-white bg-opacity-50 text-xl font-bold px-4">
              <div className="flex flex-row gap-8">
                <span className="w-20">Class Id:</span>
                <span className="w-40">Powered By:</span>
                <span className="w-40">Transmited By:</span>
                <span className="w-20">Unit:</span>
              </div>
            </div>
        {eclass.map((item: Class, index: number) => {
          console.log(index)
          return (

            <div className=" text-white flex gap-2 bg-white bg-opacity-10 text-xl " key={index}>
              <div className="mx-4 flex flex-row gap-8 justify-around">
                <span className="w-20">{item.id}</span>
                <span className="w-40">{item.powered_by}</span>
                <span className="w-40">{item.transmited_by}</span>
                <span className="w-20">{item.load_unit}</span>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
}