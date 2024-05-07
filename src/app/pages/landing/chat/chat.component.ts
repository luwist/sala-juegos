import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { User } from '@app/models';
import { UserService } from '@app/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  chats$ = new Observable<any>();

  lastMessage!: string;
  currentUser!: User;

  constructor(
    private _userService: UserService,
    private _firebase: Firestore
  ) {}

  ngOnInit(): void {
    this.currentUser = this._userService.currentUser as User;

    const chats = collection(this._firebase, 'chats');
    this.chats$ = collectionData(chats);
  }

  async sendMessage() {
    const currentUser = this._userService.currentUser as User;
    const chats = collection(this._firebase, 'chats');

    await addDoc(chats, {
      username: currentUser.username,
      avatar: currentUser.avatar,
      message: this.lastMessage,
    });

    this.lastMessage = '';
  }

  getKey(e: any): void {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }
}
