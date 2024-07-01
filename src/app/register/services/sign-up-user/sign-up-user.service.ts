import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpUserService {

  constructor(private http: HttpClient) {

  }

  registerUser(username: string, email: string, password: string) {

    return this.http.post('http://localhost:8080/api/auth/signup', {
      username: username,
      email: email,
      password: password
    })

  }

  // handleError(error: HttpErrorResponse): Observable<never> {

  //   let errorMessage = 'Unknown error'

  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = `Error: ${error.error.message}`
  //   }
  //   else {
  //     errorMessage = `Something Went Wrong! Please contact support at support@abc.com`
  //   }

  //   return throwError(() => errorMessage)

  // }


}


