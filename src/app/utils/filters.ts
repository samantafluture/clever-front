import { Status } from "../enums/status";
import { Sprint } from "../interfaces/sprint";

export function sortByDueDate(itemA: any, itemB: any) {
  let dateA = new Date(itemA.dueDate);
  let dateB = new Date(itemB.dueDate);

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

export function filterByProject(sprint: Sprint, projectId: any) {
  const project = sprint.project?.id === projectId ? true : false;
  return project;
}

export function filterBySprint(task: any, sprintId: any) {
  const sprint = task.sprint?.id === sprintId ? true : false;
  return sprint;
}


