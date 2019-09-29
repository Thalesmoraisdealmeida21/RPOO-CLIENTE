import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/datatypes/user';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User
  skils;

  ngOnInit() {
    this.userService.getSkils(localStorage.getItem("id")).subscribe((skil)=>{
      this.skils = skil
     
    })
    this.getDataUser();

  }


  makeTab(){
    
  }

  getDataUser(){
    this.userService.getUser(localStorage.getItem("id")).subscribe((user: User) => {
      this.user = user;
    })


  

  }
}
