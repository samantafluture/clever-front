export enum Progress {
  TO_DO = countToDo(),
  IN_PROGRESS = countDoing(),
  DONE = countDone(),
}

function countToDo() {
  return 10;
}

function countDoing() {
  return 30;
}

function countDone() {
  return 40;
}
