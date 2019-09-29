import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor(private GroupService: GroupService, private router: Router) { }

  group = {
    name: "",
    description: ""
  }
  msg;

  ngOnInit() {
  } 

  createGroup(){
    this.GroupService.createGroup(this.group).subscribe(()=>{
      this.router.navigateByUrl("/grupo")
      
    })
  }

}
