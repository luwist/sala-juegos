import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  message: string = '';
  lastMessage!: string;

  sendMessage(): void {
    console.log('Enviar mensahe', this.message);
  }

  getKey(e: any): void {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }
}
