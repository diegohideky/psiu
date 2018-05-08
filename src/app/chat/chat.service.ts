import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { ChatMessage } from './ChatMessage';

@Injectable()
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(message: ChatMessage){
    this.socket.emit("send", message);
  }

  getMessage() {
    return this.socket
      .fromEvent<any>("receive")
      .map( data => data.message);
  }
}
