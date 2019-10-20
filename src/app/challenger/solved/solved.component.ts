import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.component.html',
  styleUrls: ['./solved.component.scss']
})
export class SolvedComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ChallegerService: ChallengerService) { }

  showRouterParams;
  Question: Question;
  alternativas;
  challenger;
  question;



  ngOnInit() {
    this.showRouterParams=  
    this.route.params.subscribe((data3)=>{
      this.getQuestion(data3.challenger, data3.question);
      this.getAlternatives(data3.question);
      this.challenger = data3.challenger;
      this.question = data3.question
      })


  }

  getQuestion(challenger, question){
      this.ChallegerService.getQuestion(challenger, question).subscribe((data2: Question)=>{
        this.Question = data2;
        console.log("Question: " + this.Question.name)
      })
  }
  
  getAlternatives(question) {
    this.ChallegerService.getAlternatives(question).subscribe((data) =>{
      this.alternativas = data;
    })

  }

  NextQuestion(){
     var proximaQuestao = parseInt(this.question);
     proximaQuestao = proximaQuestao + 1;
        this.router.navigateByUrl("/desafios/fazer/" + this.challenger + "/" +proximaQuestao )
  }



}
