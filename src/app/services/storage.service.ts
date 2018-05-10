import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    var item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    } else {
        return item;
    }
  }

  removeItem(key) {
      localStorage.removeItem(key);
  }

}