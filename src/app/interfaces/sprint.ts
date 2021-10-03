import { Status } from './../enums/status';
import { Project } from './project';
import { Tasks } from "./task";

export interface Sprint {
  id?: number,
  title: string,
  description: string,
  status: Status,
  tasks?: Tasks,
  project: Project,
  dueDate: Date,
  createdAt: Date,
  updatedAt?: Date
}

export type Sprints = Array<Sprint>;
