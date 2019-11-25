import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { ActivatedRoute } from '@angular/router';
import { Challenger } from 'src/app/datatypes/challenger';

@Component({
  selector: 'app-users-answers',
  templateUrl: './users-answers.component.html',
  styleUrls: ['./users-answers.component.scss']
})
export class UsersAnswersComponent implements OnInit {

  constructor(private ChallengerService: ChallengerService, private ActivateRouter: ActivatedRoute) { }

  answers;
  challenger;
  ChallengerObject: Challenger
  ngOnInit() {
    this.ActivateRouter.params.subscribe((data)=>{
      this.getAnswersUsers(data.id)
      this.ChallengerService.getChallengerById(data.id).subscribe((challenger: Challenger)=>{
        this.ChallengerObject = challenger
      })
    })

  }

  getAnswersUsers(challenger){
      this.ChallengerService.getAnswersUsers(challenger).subscribe((answers)=>{
          this.answers = answers
      })
  }



  

 

}
