import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  saveQuestion(data, id){
    
    const HttpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    }
    const url = environment.api + "/question/create/" + id;

    return this.http.post(url, data, HttpOptions)

  }


  getQuestionsByChallenger(id){
  
    const url = environment.api + "/questions/challenger/" + id;
    return this.http.get(url)
  }
}
