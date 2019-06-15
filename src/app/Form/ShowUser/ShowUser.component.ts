import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './ShowUser.component.html',
  styleUrls: ['./ShowUser.component.css']
})
export class ShowUserComponent implements OnInit {

  user;
  constructor() { }

  ngOnInit() {
    this.user = history.state.data;
    console.log(this.user);
  }

}
