import { Sprint } from './sprint';
import { Member } from './member';

export interface Task {
  id?: number,
  description: string,
  isUrgent: boolean,
  isDone: boolean,
  assignedMember?: Member,
  sprint?: Sprint,
  dueDate: Date,
  createdAt: Date,
  updatedAt?: Date
}

export type Tasks = Array<Task>;
