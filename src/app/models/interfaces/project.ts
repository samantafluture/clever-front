import { Progress } from 'src/app/models/enums/progress';
import { Members } from './member';
import { Manager } from './manager';
import { Sprints } from './sprint';

export interface Project {
  id?: number;
  title: string;
  description: string;
  manager?: Manager;
  members?: Members;
  sprints?: Sprints;
  dueDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  progress: Progress;
}

export type Projects = Array<Project>;
