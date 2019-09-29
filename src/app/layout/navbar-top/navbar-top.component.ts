import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  constructor(private router: Router) { }


  @Output() event = new EventEmitter();
  ngOnInit() {
  }

  emitEvent(){
    this.event.emit();
    this.router.navigateByUrl("/login")
  }

}
