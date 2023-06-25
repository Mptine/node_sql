import { useState, useEffect } from "react";
import { Class, User } from "../../../shared/types";
import { useParams } from "react-router-dom";
import { getClass, getUsers } from "../api/getSecondaryStuff";
import { EclassList } from "../components/EclassList";
import { UsersList } from "../components/UsersList";

const defaultClassList: Class[] = []
const defalutUserList: User[] = []

export function SecondaryStuff() {
  const [classData, setClassData] = useState(defaultClassList);
  const [userData, setUserData] = useState(defalutUserList);
  const params = useParams();
  useEffect(() => {
    getClass().then(
      (classData) => setClassData(classData)
      
    ).catch(function (error) {
      console.log(error.toJSON());
    });
    getUsers().then(
      (userData) => setUserData(userData)
      
    ).catch(function (error) {
      console.log(error.toJSON());
    });

  }, [params]);
  return (
    <div className=" w-10/12 items-center flex flex-col h-fit">
      <EclassList eclass={classData} />
      <UsersList users={userData} />
    </div>);
}