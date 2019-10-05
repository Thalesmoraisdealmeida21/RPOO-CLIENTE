import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';

@Component({
  selector: 'app-list-challengers',
  templateUrl: './list-challengers.component.html',
  styleUrls: ['./list-challengers.component.scss']
})
export class ListChallengersComponent implements OnInit {

  constructor(private ChallengerService: ChallengerService) { }

  challengers

  listChallenger(){
    this.ChallengerService.getChallengers().subscribe((challengers)=>{
      this.challengers = challengers;
    })
  }
  ngOnInit() {
    this.listChallenger();
  }


  deleteChallenger(id) {
    this.ChallengerService.deleteChallenger(id).subscribe(()=>{
      this.listChallenger();
    })
  }

}
