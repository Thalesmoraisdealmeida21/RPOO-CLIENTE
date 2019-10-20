import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {

  constructor(private http: HttpClient) { }

  data;

  getChallengers(){
      const url = environment.api + "/challengers";
      return this.http.get(url)
  }


  getChallengersGlobal(){
    const url = environment.api + "/challengers/all";
    return this.http.get(url)
}

 saveChallenger(data){
   const httpOptions = {
     headers: new HttpHeaders({
       "Content-type": "application/json"
     })
   }
    const url = environment.api + "/challenger/create"
    return this.http.post(url, data, httpOptions);
  }

  deleteChallenger(id){

    const url = environment.api + "/challengers/delete/" + id
    return this.http.delete(url);

  }

  getQuestion(challenger, question) {
    const url = environment.api + "/challengers/questao/" + question + "/" + challenger;
    return this.http.get(url) 
  }

  getAlternatives(question) {
    const url = environment.api + "/challengers/questao/alternativas/" + question;
    return this.http.get(url);
  }

  getFirstQuestion(challenger) {
    const url = environment.api + "/challenger/questao/primeira/" + challenger;
    return this.http.get(url)
  }
}
