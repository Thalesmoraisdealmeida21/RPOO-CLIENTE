import { Component, OnInit } from '@angular/core';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  constructor(private RankService: RankingService) { }
  users;

  ngOnInit() {
    this.generateRank();
  }


  generateRank(){
      this.RankService.getRankingGlobal().subscribe((users)=>{
            this.users = users;
      })  
  }

  

}
