import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { CKEditorModule } from 'ckeditor4-angular';

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
    difficulty: "",
    type: ""
  }

  challenger = {
    id: "",
    name: "",

  }
  ngOnInit() {

    this.group.getGroups().subscribe((groups)=>{
        this.grupos = groups;
    })
  }



  next(){ 
        this.Challenger.saveChallenger(this.data).subscribe((id)=>{
            this.router.navigateByUrl("/desafios/novo/questions/" + id)
        })
        
      }

}
