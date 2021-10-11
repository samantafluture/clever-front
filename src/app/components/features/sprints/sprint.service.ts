import { Sprints, Sprint } from 'src/app/models/interfaces/sprint';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  constructor(private http: HttpClient) { }

  private sprintsUrl = 'api/sprints';

  getSprints(): Observable<Sprints> {
    return this.http.get<Sprints>(this.sprintsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
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
