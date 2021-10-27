import { JsonpClientBackend } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://127.0.0.1:8000/api/login'
  }

  constructor() { }

  handleToken(token){
    this.setToken(token)
  }//end handleToken function

  setToken(token){
    localStorage.setItem('token', token);
  }//end setToken function

  getToken(){
    return localStorage.getItem('token');
  }//end getToken function

  removeToken(){
    localStorage.removeItem('token');
  }//end removeToken function

  isValid(){
    const token = this.getToken();

    if(token){
      const payload = this.payloadData(token);

      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;

  }//end isValid function

  payloadData(token){
    const payload = token.split('.')[1];
    return this.decodeData(payload);
  }//end payloadData function

  decodeData(payload){
    return JSON.parse(atob(payload));
  }//end decodeData function
  

  isLoggedIn(){
    return this.isValid();
  }//end isLoggedIn function

}//end TokenService class