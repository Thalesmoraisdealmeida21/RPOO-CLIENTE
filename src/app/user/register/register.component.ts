import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/datatypes/user';
import { UserService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    username: "",
    password: "",
    email: ""
  }

  status: Boolean = false;
  teste = "pequeno";
  repeatPassword;
  statusPassword: Boolean = false;
  msgError = "";
  statusErrors = false;


  retorno = false;
 
  
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  checkPassword(password, repeatePassword){
      if(password === repeatePassword){
        return true
      } else {
        return false;
      }
  }

  validFields(){
    if(this.user.username == ""){
        this.msgError = "Preencha todos os campos para se cadastrar"
    }
    if(this.user.email == ""){
        this.msgError = "Preencha todos os campos para se cadastrar"
    }
  
    
  }
  registerUser(){
    this.retorno = false;
    this.validFields();
 

    if(this.checkPassword(this.user.password, this.repeatPassword)){
      this.validFields();
     
      this.userService.register(this.user).subscribe((response)=>{
        if(!response){
            this.statusErrors = true;
            this.retorno = !response
        } else {
          this.status = true;
        }
         
        
         
    })
    } else {
      this.statusPassword = true;
      console.log(this.statusPassword)
    }
    
  
    




}


  

}
