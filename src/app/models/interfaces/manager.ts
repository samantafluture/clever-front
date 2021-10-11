import { User } from './user';
import { Tasks } from './task';
import { Members } from './member';
import { Projects } from './project';

export interface Manager extends User {
  projects?: Projects,
  tasks?: Tasks,
  members?: Members
}
