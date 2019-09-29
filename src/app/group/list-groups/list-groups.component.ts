import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {

  groups
  name="Grupos"
  constructor(private GroupService: GroupService, private router: Router) { }


  ngOnInit() {
    this.getGroups();
  }


  public getGroups(){
        this.GroupService.getGroups().subscribe((groups)=>{
          this.groups = groups
        })
  }


  deleteGroup(id){
    this.GroupService.deleteGroup(id).subscribe((err)=>{
      this.router.navigateByUrl("/grupo")
      this.getGroups();
    })
  }



}
