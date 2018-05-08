import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMessage } from './ChatMessage';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public username: string;
  public message: string;
  public messages: ChatMessage[];
  public currentTime: Date;

  constructor(
    private chatService: ChatService,
    private localStorageService: LocalStorageService
  ) {
    this.chatService.getMessage().subscribe(message => this.addMessage(message));
  }

  ngOnInit(): void {
    this.currentTime = new Date();
    this.messages = [];
    this.username = this.localStorageService.getUsername();
  }

  send(): void {
    let newMessage = {
      username: this.username,
      text: this.message,
      datetime: new Date()
    }
    this.chatService.sendMessage(newMessage);
    this.addMessage(newMessage);
    this.message = '';
  }

  addMessage(message: ChatMessage): void {
    this.messages.push(message);
  }

  getClass(message: ChatMessage): string {
    return message.username === this.username ? 'self' : 'other';
  }

}
