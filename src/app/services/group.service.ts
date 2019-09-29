import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }



  getGroups(){
    const url = environment.api + "/groups"
    return this.http.get(url);
  }


  createGroup(group){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    
    const url = environment.api + "/groups/create";
    console.log("Funcionou " + group.name)
    return this.http.post(url, group, httpOptions)
  }

  findOne(id){
    const url = environment.api + "/groups/find/" + id;
    return this.http.get(url)
  }


  deleteGroup(id){

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }

      const url = environment.api + "/groups/delete/" + id;
      return this.http.delete(url, httpOptions);
  }
}
