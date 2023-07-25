import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/helper/helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  
  loginUser(user:any){
    return this._http.post(`${baseUrl}/user/login`,user);
  }


  createUser(user:any){
    return this._http.post(`${baseUrl}/user/`,user);
  }

}
