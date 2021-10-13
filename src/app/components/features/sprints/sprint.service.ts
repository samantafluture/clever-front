import { Sprints, Sprint } from 'src/app/models/interfaces/sprint';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isDone, isInProgress, isToDo } from 'src/app/utils/filters';

@Injectable({
  providedIn: 'root',
})
export class SprintService {
  constructor(private http: HttpClient) {}

  private sprintsUrl = 'api/sprints';

  getSprints(): Observable<Sprints> {
    return this.http.get<Sprints>(this.sprintsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getTodoSprints(): Observable<Sprints> {
    return this.http
      .get<Sprints>(this.sprintsUrl)
      .pipe(map((sprints) => sprints.filter((sprint) => isToDo(sprint))));
  }

  getDoneSprints(): Observable<Sprints> {
    return this.http
      .get<Sprints>(this.sprintsUrl)
      .pipe(map((sprints) => sprints.filter((sprint) => isDone(sprint))));
  }

  getInProgressSprints(): Observable<Sprints> {
    return this.http
      .get<Sprints>(this.sprintsUrl)
      .pipe(map((sprints) => sprints.filter((sprint) => isInProgress(sprint))));
  }

  getSprintById(id: number): Observable<Sprint> {
    const url = `${this.sprintsUrl}/${id}`;
    return this.http.get<Sprint>(url);
  }

  createSprint(sprint: Sprint): Observable<Sprint> {
    return this.http.post<Sprint>(this.sprintsUrl, sprint).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editSprint(sprint: Sprint, id: number): Observable<any> {
    const url = `${this.sprintsUrl}/${id}`;
    return this.http.put<Sprint>(url, sprint);
  }

  deleteSprint(id: number): Observable<Sprint> {
    const url = `${this.sprintsUrl}/${id}`;
    return this.http.delete<Sprint>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
