import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }



  login(user){  
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json'
      })
    }
    const url = environment.api + "/login";
    
    return this.http.post(url, user, httpOptions);



    
  }

  public genSession(user, token){
      environment.TOKEN = "token";
      localStorage.setItem("token", token);
      localStorage.setItem("id", user.id);
      localStorage.setItem("username", user.username)
  }

  public destroySession(){
    
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("username")

    
    
   
  }


  checkSession(){
    if(localStorage.getItem("token") !== ""){
      if(localStorage.token === undefined){
        return false;
      }
      const decodeToken = jwt_decode(localStorage.getItem("token"));
 
      if(decodeToken.id == localStorage.getItem("id")){
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  }

}
