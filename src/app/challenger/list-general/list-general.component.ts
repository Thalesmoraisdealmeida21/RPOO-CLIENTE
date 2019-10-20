import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-general',
  templateUrl: './list-general.component.html',
  styleUrls: ['./list-general.component.scss']
})
export class ListGeneralComponent implements OnInit {

  constructor(private router: Router, private ChallengerService: ChallengerService) { }

  ngOnInit() {
    this.getChallengers()
  }

  challengers;

  getChallengers(){
      this.ChallengerService.getChallengersGlobal().subscribe((challengers)=>{
          this.challengers = challengers
      })
  }

  goChallenger(challenger){
    this.ChallengerService.getFirstQuestion(challenger).subscribe((question)=>{
         this.router.navigateByUrl("desafios/fazer/" + challenger + "/" + question)
    })
    
  }

}
