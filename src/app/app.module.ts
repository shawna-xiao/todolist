import { StorageService } from './services/storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NewsComponent } from './component/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule   
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
