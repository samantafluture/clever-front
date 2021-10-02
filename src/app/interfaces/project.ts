import { Members } from './member';
import { Status } from './../enums/status';
import { Manager } from "./manager";
import { Sprints } from "./sprint";

export interface Project {
  id: number,
  title: string,
  description: string,
  manager?: Manager,
  members?: Members,
  sprints?: Sprints,
  status: Status,
  dueDate: Date,
  createdAt: Date,
  updatedAt?: Date
}

export type Projects = Array<Project>;
