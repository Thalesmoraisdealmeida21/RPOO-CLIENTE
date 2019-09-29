import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/datatypes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() tab ="";
  user: User;

  getUser(){
    const id = localStorage.getItem("id")
      this.userService.getUser(id).subscribe((user: User) =>{
          this.user = user;
      })
  }
  ngOnInit() {
        this.getUser();
  }

}
