import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginRequest } from '../models/UserModel/UserLoginRequest';
import { UserLoginResponse } from '../models/UserModel/UserLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:5000/auth';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:UserLoginRequest): Observable<UserLoginResponse>{
    return this.httpClient.post<UserLoginResponse>(this.apiUrl,loginModel)
  }
  getToken(){
    return localStorage.getItem("token");
  }
  getUsername(){
    return localStorage.getItem("username");
  }
}
