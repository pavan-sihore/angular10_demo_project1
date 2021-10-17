import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';

export interface AuthResponceData{
  access_token: string;
  expires_in: string;
  token_type: string;
  registerd?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient ) { }

  singup(username: String, password: String){
    return this.http.post<AuthResponceData>(environment.hostBaseUrl+'/api/login',{
      "email": username,
      "password": password
    }).pipe(catchError(this.handleError));
  }//end singup function

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = "Unkonwn error occurred!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }else{
      return throwError(errorRes.error.error);
    }
  }

}//end AuthService class