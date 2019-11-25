import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Challenger } from 'src/app/datatypes/challenger';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() challenger;
  @Input() typObjective;

  data = {
    question: {
    name: "",
    habilidade: "",
    alternatives: {
      one: {
        name: "",
        correct: "",
      },
      two: {
        name: "",
        correct: "",
      },
      three: {
        name: "",
        correct: "",
      },
      four: {
        name: "",
        correct: "",
      },
    },
    
  }
};



  constructor(private ChallengerService: ChallengerService, private router: Router, private QuestionService: QuestionService, private route: ActivatedRoute) { }

  msgSucess = "";
  status: Boolean;
  challengerID;
  questionsArray;
  challengerOne: Challenger
  statusTipo: Boolean = false

  ngOnInit() {
   this.route.params.subscribe(params=> {
      this.challengerID = params['id']
    })

    this.getQuestionsChallenger()
    this.getChallenger();
   
    if(this.challengerOne.type == "Objetivo"){
      this.statusTipo = true;
    } else {
        this.statusTipo = false;
    }
  }

  getQuestionsChallenger(){
    this.QuestionService.getQuestionsByChallenger(this.challengerID).subscribe((questions)=> {
      
      this.questionsArray = questions;
    })
  }

  getChallenger(){
    this.ChallengerService.getChallengerById(this.challengerID).subscribe((challengerFounded: Challenger)=>{
      if(challengerFounded.type == "Objetivo"){
        this.statusTipo = true;
      } else {
        this.statusTipo = false;
      } 
    })
  }


  saveQuestion(){
    const id = this.challengerID;
  
      this.QuestionService.saveQuestion(this.data, id).subscribe(()=>{
        this.getQuestionsChallenger()
        
      })
  }

  saveChallenger(){
    this.router.navigateByUrl("/desafios/lista")

  }

}
