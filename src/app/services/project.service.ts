import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project, Projects } from '../interfaces/project';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsUrl = 'api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Projects> {
    return this.http.get<Projects>(this.projectsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getProjectById(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editProject(project: Project): Observable<any> {
    return this.http.put(this.projectsUrl, project).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.delete<Project>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
