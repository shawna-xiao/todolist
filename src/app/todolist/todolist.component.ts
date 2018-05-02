import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public username:string = '';

  public list = [];

  constructor() { }

  ngOnInit() {
  }

  addUser(e) {
    if (e.keyCode == 13 && this.username) {
      var obj = {
        status: 1,
        username: this.username
      }

      this.list.push(obj);
      this.username = '';
    }
  }

  deleteDate(key) {
    this.list.splice(key, 1);
  }

  changeStatus(key) {
    this.list[key].status = 2;
  }

}
