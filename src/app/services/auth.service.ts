import { Observable } from 'rxjs';
import { catchError, throwError, map } from 'rxjs';
import { NotFound } from './../common/errors/not-found';
import { BadInput } from './../common/errors/bad-input';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './../common/classes/user';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn:'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user:User):Observable<any>{
    return this.http.post('/api/authenticate',JSON.parse(JSON.stringify(user)), {
      observe:"response"
    }).pipe(
      map(response=>{
        if(response && response.status == 200){
          localStorage.setItem('token',<string>response.body);
          return true;
        }
        return false;
      }),
      catchError(this.handleError));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    let token = localStorage.getItem('token');
    if (!token)
      return false;
    let isExpired = new JwtHelperService().isTokenExpired(token);
    return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }
  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
        //A client-side or network error occured. Handle it accordinhgly.
        return throwError(() => new BadInput(error.error));
    }else{
        //The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error('Backend returned code ${error.status}, body was', error.error);
        if (error.status === 404){
            return throwError(() => new NotFound(error.error));
        }else if(error.status === 400){
            return throwError(() => new BadInput(error.error));
        }
    }

    //Return an observable with the error message to show the user
    return throwError(() => new Error('Someting bad happened; please try again'));
}
}

