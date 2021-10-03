import { Project } from "../interfaces/project";

export function sortByDueDate(projectA: Project, projectB: Project) {
  let dateA = new Date(projectA.dueDate);
  let dateB = new Date(projectB.dueDate);

  if (dateA > dateB) {
    return 1;
  }
  if (dateA < dateB) {
    return -1;
  }
  return 0;
}
