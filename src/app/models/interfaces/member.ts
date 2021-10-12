import { User } from './user';
import { Projects } from './project';
import { Tasks } from './task';

export interface Member extends User {
  projects?: Projects,
  tasks?: Tasks
}

export type Members = Array<Member>;
