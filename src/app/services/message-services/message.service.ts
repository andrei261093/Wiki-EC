import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface MessageInterface {
  destination: String;
  action: String;
  params: Object;
 }

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private subject = new Subject<any>();

  sendMessage(destination: string, action: string, params: Object) {
    let message = {} as MessageInterface;
    message.destination = destination;
    message.action = action;
    message.params = params;
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
