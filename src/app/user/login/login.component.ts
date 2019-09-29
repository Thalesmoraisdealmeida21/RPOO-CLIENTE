import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/datatypes/user';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/interfaces/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = {
    username: "",
    password: ""
  }

  statusAuth;
  msgStatus;
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {

  }


  login(){
     this.AuthService.login(this.user).subscribe((autenticado: Auth)=>{
      const token = autenticado.token.token;
      this.AuthService.genSession(autenticado, token);
      this.router.navigateByUrl("/dashboard");
  })
    

  }

  loginFailed(){
    this.msgStatus = "Usuario ou senha incorretos";
  }



}
