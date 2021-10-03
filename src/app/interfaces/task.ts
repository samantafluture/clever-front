import { IsUrgent } from './../enums/is-urgent';
import { Status } from './../enums/status';
import { Sprint } from './sprint';
import { Member } from './member';

export interface Task {
  id?: number,
  description: string,
  status: Status,
  isUrgent: IsUrgent,
  assignedMember?: Member,
  sprint?: Sprint,
  dueDate: Date,
  createdAt: Date,
  updatedAt?: Date
}

export type Tasks = Array<Task>;
