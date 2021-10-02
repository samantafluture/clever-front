import { Role } from "../enums/role";

export interface User {
  id: number,
  name: string,
  email: string,
  password: string,
  jobTitle: string,
  photoUrl?: string,
  role: Role
}
