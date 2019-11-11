import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/datatypes/user';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

  constructor(private UserService: UserService) { }

  user: User
  status: Boolean = false;
  ngOnInit() {
    this.getUserData()
  }

  getUserData(){
        this.UserService.getUser(localStorage.getItem("id")).subscribe((user: User)=>{
              this.user = user;
        })
  }

  saveData(){
      this.UserService.updateData(this.user).subscribe((respon)=>{
          if(respon){
            this.status = true;

          }

          this.getUserData();
      })

  }

}
