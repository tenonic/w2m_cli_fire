import { Injectable, ApplicationRef } from '@angular/core';

export class DataService {
    constructor() { }
    logger(data: string) {
      console.log(data);
    }
}