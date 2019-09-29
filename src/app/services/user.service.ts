import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  register(user){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }
    return this.http.post(environment.api + "/user", user, httpOptions);




  }

  getUser(id){
    return this.http.get(environment.api + "/user/" + id);
  }

  getSkils(id){
    return this.http.get(environment.api + "/skil/find/" + id)
  }



}
