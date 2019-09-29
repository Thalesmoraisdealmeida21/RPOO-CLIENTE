import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private group: GroupService, private Challenger: ChallengerService, private router: Router) { }

  grupos;
  data = {
    name: "",
    level: "",
    group: "",
    user: localStorage.getItem("id"),
    experience: ""
  }
  ngOnInit() {

    this.group.getGroups().subscribe((groups)=>{
        this.grupos = groups;
    })
  }



  next(){ 
        this.Challenger.saveChallenger(this.data).subscribe((err)=>{
            this.router.navigateByUrl("/desafios/novo/questions")

        })
        
      }

}
