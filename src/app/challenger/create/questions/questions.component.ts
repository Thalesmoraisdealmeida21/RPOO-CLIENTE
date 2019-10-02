import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() challenger

  data = {
    question: {
    name: "",
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
}

  constructor(private QuestionService: QuestionService, private route: ActivatedRoute) { }

  msgSucess = "";
  status: Boolean;
  challengerID;
  questionsArray;

  ngOnInit() {
   this.route.params.subscribe(params=> {
      this.challengerID = params['id']
    })

    this.getQuestionsChallenger()
  }

  getQuestionsChallenger(){
    this.QuestionService.getQuestionsByChallenger(this.challengerID).subscribe((questions)=> {
      console.log(questions)
      this.questionsArray = questions;
    })
  }


  saveQuestion(){
    const id = this.challengerID;
  
      this.QuestionService.saveQuestion(this.data, id).subscribe(()=>{
        this.getQuestionsChallenger()
        
      })
  }

}
