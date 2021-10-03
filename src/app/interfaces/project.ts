import { Members } from './member';
import { Manager } from "./manager";
import { Sprints } from "./sprint";

export interface Project {
  id?: number,
  title: string,
  description: string,
  manager?: Manager,
  members?: Members,
  sprints?: Sprints,
  dueDate: Date,
  createdAt?: Date,
  updatedAt?: Date
}

export type Projects = Array<Project>;
