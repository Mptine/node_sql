import type { User } from "../../../shared/types";

type UsersStaticProps = {
  users: User[];
};

export function UsersList({ users }: UsersStaticProps) {
  console.log(users)

  return (
    <div className="w-full">
      <h1 className="text-4xl fonte-extrabold text-white p-4">Users:</h1>
      <div className=" my-2 p-2 flex w-fit flex-col px-4">
      <div className=" text-white flex gap-2 bg-white bg-opacity-50 text-xl font-bold px-4">
              <div className="flex flex-row gap-8">
                <span className="w-20">Id:</span>
                <span className="w-40">User Type:</span>
                <span className="w-40">Phone:</span>
                <span className="w-30">Work At:</span>
                <span className="w-52">Department:</span>
                <span className="w-52">Sector:</span>
              </div>
            </div>
        {users.map((item: User, index: number) => {
          console.log(index)
          return (

            <div className=" text-white flex gap-2 bg-white bg-opacity-10 text-xl " key={index}>
              <div className="mx-4 flex flex-row gap-8 justify-around">
                <span className="w-20">{item.id}</span>
                <span className="w-40">{item.type}</span>
                <span className="w-40">{item.phone}</span>
                <span className="w-20">{item.work_at}</span>
                <span className="w-52">{item.department}</span>
                <span className="w-52">{item.sector}</span>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
}