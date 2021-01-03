import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import {Observable, Observer} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getConfig(){
    return environment.social;
  }

  public getCartTotal(): any {
    let fakeresponse = 10;
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(fakeresponse);
      }, 2000);
    });

    return studentsObservable;
  }

  getUserStatus(): any {
    let fakeresponse = true;
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(fakeresponse);
      }, 2000);
    });

    return studentsObservable;
  }

}
