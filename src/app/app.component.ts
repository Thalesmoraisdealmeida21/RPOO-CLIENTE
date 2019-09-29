import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'LPOO - Sistema de Aprendizado de Programação Orientada a Objetos';
  AuthStatus: boolean;
  constructor(private auth: AuthService){

  }
  
  ngOnInit(){
      this.AuthStatus = this.auth.checkSession();
      console.log("status:" + this.AuthStatus)
  }
  
}
