import { StorageService } from './../services/storage.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public username:string = '';

  public list = [];

  constructor(private storageService: StorageService  ) { }

  ngOnInit() {
    this.list = this.storageService.getItem('todoList') || [];
  }

  addUser(e) {
    var obj, todoList = [];
    if (e.keyCode == 13 && this.username) {
      obj = {
        status: 1,
        username: this.username
      }

      todoList = this.storageService.getItem('todoList') || [];

      todoList.push(obj);
      this.storageService.setItem('todoList', todoList);

      this.list.push(obj);
      this.username = '';
    }
  }

  deleteDate(key) {
    this.list.splice(key, 1);
    this.storageService.setItem('todoList', this.list);
  }

  changeStatus(key) {
    this.list[key].status = 3 - this.list[key].status;
    this.storageService.setItem('todoList', this.list);
  }

}
