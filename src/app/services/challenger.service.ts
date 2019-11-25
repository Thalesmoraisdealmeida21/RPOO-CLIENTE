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

  getChallengerById(idChallenger){
    const url = environment.api + "/challenger/" + idChallenger;
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

  saveAnswer(data){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    }

    const url = environment.api + "/challenger/question/answer";
    return this.http.post(url, data, httpOptions);
    

  }

  getFirstQuestion(challenger) {
    const url = environment.api + "/challenger/questao/primeira/" + challenger;
    return this.http.get(url)
  }

  answerTheQuestion(dataAnswer){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    }
    const url =  environment.api + "/challenger/check";
    return this.http.post(url, dataAnswer, httpOptions)
}

finishChallenger(data){
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    })
  }

  const url = environment.api + "/challengers/end";
  return this.http.post(url, data, httpOptions)
}

getDescritiveChallengers(){
  const url = environment.api + "/challengers/descritivos";
  return this.http.get(url);
}

getAnswersUsers(challenger){
  const url = environment.api + "/challengers/solved/" + challenger
  return this.http.get(url)
}

getAnswersUser(userid, challengerid){
  const url = environment.api + "/challenger/answers/" + challengerid + "/" + userid;
  return this.http.get(url)
}

setExperienceCorrectQuestion(data){
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    })
  }
  const url = environment.api + "/challengers/correctquestion"

  return this.http.post(url, data, httpOptions)

}

  
}
