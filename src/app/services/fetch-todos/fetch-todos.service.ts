import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchTodosService {

  constructor(private http: HttpClient) {
      

  }

  fetchTodos(user_id: string ) {
    return this.http.post('http://localhost:8080/api/todo/find/user', {
      user_id: user_id
    }).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse): Observable<never> {

    let errorMessage = 'Unknown error'

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`
    }
    else {
      errorMessage = `Something Went Wrong! Please contact support at support@abc.com`
    }

    return throwError(() => errorMessage)

  }
}
