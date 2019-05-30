import { Injectable } from '@angular/core';
import { UserClass } from './user-class';
import { Router } from '@angular/router';
import { endPoints } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  url = endPoints.url + "user/";
  commonHeader = new HttpHeaders().set("Content-Type", "application/json");
  currentUser:any=null;
  redirectURL:string="";
  constructor(private _router: Router,private _http:HttpClient) { }

  login(item){
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:this.commonHeader});
  }
  logout() {
    this.currentUser = null;
    this._router.navigate(['']);
  }
}
