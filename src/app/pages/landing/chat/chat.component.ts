import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { User } from '@app/models';
import { Chat } from '@app/models/chat.interface';
import { AuthService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  chats: any[] = [];

  lastMessage!: string;
  currentUser!: User;

  constructor(
    private _firebase: Firestore,
    private _authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = this._authService.currentUser.user as User;

    const collectionRef = collection(this._firebase, 'chats');
    const q = query(collectionRef, orderBy('createdAt'));

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();

        this.chats.push(data);
      });
    });
  }

  async sendMessage() {
    const chats = collection(this._firebase, 'chats');

    await addDoc(chats, {
      username: this.currentUser.username,
      avatar: this.currentUser.pictureUrl,
      content: this.lastMessage,
      createdAt: new Date(),
    });

    this.lastMessage = '';
  }
}
