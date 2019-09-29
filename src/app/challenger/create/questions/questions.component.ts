import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  question = {
    name: "",
    alternatives: {
      one: "",
      two: "",
      three: "",
      four: ""
    },
    correct: ""
  }

  constructor() { }



  ngOnInit() {
  }

}
