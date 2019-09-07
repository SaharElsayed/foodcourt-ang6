import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonFuncService {
  private messageSource = new BehaviorSubject([]);
  //======= to access currentMessage from any component =======
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  //========= function that allows any component to edit messageSource ========
  editMessage(newMsg) {
    this.messageSource.next(newMsg);
  }
}
