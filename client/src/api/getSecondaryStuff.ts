import { api } from "./api";
import { Class, User } from "../../../shared/types";


export async function getUsers(): Promise<User[]> {
  const res = await api.get("/users");
  const users = res.data;
  return users;
  
}
export async function getClass(): Promise<Class[]> {
  const res = await api.get("/class");
  const e_class = res.data;
  return e_class;
  
}
