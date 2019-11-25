import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Question } from 'src/app/interfaces/question';
import { Challenger } from 'src/app/datatypes/challenger';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.component.html',
  styleUrls: ['./solved.component.scss']
})
export class SolvedComponent implements OnInit {

  constructor(private UserService:UserService, private router: Router, private route: ActivatedRoute, private ChallegerService: ChallengerService) { }

  showRouterParams;
  Question: Question;
  alternativas;
  challenger;
  question;
  Challenger: Challenger
  skils;
  userAtual;
  tipoDesafio: Boolean = false;
  answerDescritive = {
    iduser: localStorage.getItem("id"),
    idquestion: "",
    answer: ""
  };
 
  msgEnd = false;
  answer = {
      answer: "",
      question: "",
      experience: 10,
      skil: 1,
      user: localStorage.getItem("id")
  }

  



  ngOnInit() {
    this.showRouterParams=  
    this.route.params.subscribe((data3)=>{
      this.getQuestion(data3.challenger, data3.question);

      this.getAlternatives(data3.question);
      this.challenger = data3.challenger;
      this.question = data3.question;
      this.answer.question = data3.question
      this.answerDescritive.idquestion = data3.question
      })
      this.getChallenger()
     
  }

  getQuestion(challenger, question){
      this.ChallegerService.getQuestion(challenger, question).subscribe((data2: Question)=>{
        this.Question = data2;
        
        
      })
  }
  
  getAlternatives(question) {
    this.ChallegerService.getAlternatives(question).subscribe((data: String) =>{
  
       
        if(data.length > 0){
          this.alternativas = data;
        } else {
          this.msgEnd = true;
        }

        this.UserService.getSkils(localStorage.getItem("id")).subscribe((skils)=>{
          this.skils = skils
        })

        this.UserService.getUser(localStorage.getItem("id")).subscribe((user)=>{
          this.userAtual = user;
        })
    
      
      
    })

  }

  saveAnswer(){
      this.ChallegerService.saveAnswer(this.answerDescritive).subscribe((ret)=>{
        var proximaQuestao = parseInt(this.question);        
        proximaQuestao = proximaQuestao + 1;
        this.answerDescritive.answer = "";
        this.router.navigateByUrl("/desafios/fazer/" + this.challenger + "/" + proximaQuestao )
      })
  }

  getChallenger(){
    this.ChallegerService.getChallengerById(this.challenger).subscribe((challengerFound: Challenger)=> {
          this.Challenger = challengerFound
          if(this.Challenger.type == "Objetivo"){
     
            this.tipoDesafio = true;
        } else {
          this.tipoDesafio = false;
        }
    })
  }

  finishChallenger(){
    let data = {
      challenger:   this.challenger,
      skil: "2",
      user: localStorage.getItem("id")
    }

    this.ChallegerService.finishChallenger(data).subscribe(()=>{
      this.router.navigateByUrl("/desafios/lista/fazer")
    })


  



    /*"challenger": "1",
    "skil": "1",
    "user": "2"*/

  }

  setAnswer(answerName){
    this.answer.answer = answerName;
   
    
  }

  NextQuestion(){
    console.log(this.answer)
    if(this.Question.habilidade == "Herança"){
      this.answer.skil = 2
    }
    if(this.Question.habilidade == "Polimorfismo"){
      this.answer.skil = 3
    }
    if(this.Question.habilidade == "Objetos"){
      this.answer.skil = 4
    }
    if(this.Question.habilidade == "Abstração"){
      this.answer.skil = 1
    }

   

    if(this.Challenger.difficulty == "h") {
      this.answer.experience = 50
    }
    if(this.Challenger.difficulty == "m") {
      this.answer.experience = 20
    }
    if(this.Challenger.difficulty == "e") {
      this.answer.experience = 5
    }


    this.ChallegerService.answerTheQuestion(this.answer).subscribe((msg)=>{
      var proximaQuestao = parseInt(this.question);

      proximaQuestao = proximaQuestao + 1;
      this.router.navigateByUrl("/desafios/fazer/" + this.challenger + "/" + proximaQuestao )
 
    })

    
  }



}
