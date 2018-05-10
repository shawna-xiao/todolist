import { Component, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';

import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private list = [];
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http, private jsonp:Jsonp) { }

  ngOnInit() {
    
  }

  requestGet() {
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    // use rxjs    
    // this.http.get(url).subscribe(function(data) {
    this.http.get(url).map(res=>res.json()).subscribe(function(data) {
      //that.list = JSON.parse(data['_body']);
      console.log(data);
    }, function(err) {
      console.log(err);
    });
  }

  requestJsonp() {
    var that = this,
        url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    this.jsonp.get(url).subscribe(function(data) {
      that.list = data['_body'];
      console.log(that.list);
    }, function(err) {
      console.log(err);
    });
  }

  requestPost() {
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.post(url, JSON.stringify({username: 'admin'}), {headers: this.headers}).subscribe(function(data) {
      console.log(data);
    }, function(err) {
      console.log(err);
    });
  }

}
