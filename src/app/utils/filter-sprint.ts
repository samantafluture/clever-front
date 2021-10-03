import { Status } from "../enums/status";
import { Sprint } from "../interfaces/sprint";

export function sortByDueDate(sprintA: Sprint, sprintB: Sprint) {
  let dateA = new Date(sprintA.dueDate);
  let dateB = new Date(sprintB.dueDate);

  if (dateA > dateB) {
    return 1;
  }
  if (dateA < dateB) {
    return -1;
  }
  return 0;
}

export function isToDo(sprint: Sprint) {
  const toDo = sprint.status === Status.TO_DO ? true : false;
  return toDo;
}

export function isInProgress(sprint: Sprint) {
  const inProgress = sprint.status === Status.IN_PROGRESS ? true : false;
  return inProgress;
}

export function isDone(sprint: Sprint) {
  const done = sprint.status === Status.DONE ? true : false;
  return done;
}
