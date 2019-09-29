import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-group-information',
  templateUrl: './group-information.component.html',
  styleUrls: ['./group-information.component.scss']
})
export class GroupInformationComponent implements OnInit {

  constructor(private GroupService: GroupService, private route: ActivatedRoute) { }

  group: Group
  ngOnInit() {

    this.route.params.subscribe((params)=>{
     
         this.GroupService.findOne(params["id"]).subscribe((group: Group)=>{
           this.group = group;
           console.log(group.description)
         })
    })
      
  }

}
