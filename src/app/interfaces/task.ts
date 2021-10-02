import { Status } from './../enums/status';
import { Sprint } from './sprint';
import { Member } from './member';

export interface Task {
  id: number,
  title: string,
  description: string,
  status: Status,
  assignedMember?: Member,
  sprint: Sprint,
  dueDate: Date,
  createdAt: Date,
  updatedAt?: Date
}

export type Tasks = Array<Task>;
