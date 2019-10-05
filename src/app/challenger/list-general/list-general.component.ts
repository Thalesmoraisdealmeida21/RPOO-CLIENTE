import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';

@Component({
  selector: 'app-list-general',
  templateUrl: './list-general.component.html',
  styleUrls: ['./list-general.component.scss']
})
export class ListGeneralComponent implements OnInit {

  constructor(private ChallengerService: ChallengerService) { }

  ngOnInit() {
    this.getChallengers()
  }

  challengers;

  getChallengers(){
      this.ChallengerService.getChallengersGlobal().subscribe((challengers)=>{
          this.challengers = challengers
      })
  }

}
