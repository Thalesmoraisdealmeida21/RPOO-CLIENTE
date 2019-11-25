import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private ChallengerService: ChallengerService) { }

  challengers;
  ngOnInit() {
    this.getChallengers();
  }


  getChallengers(){
      this.ChallengerService.getDescritiveChallengers().subscribe((challengers)=>{
          this.challengers = challengers
      })
  }

}
