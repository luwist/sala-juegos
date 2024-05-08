import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  @Input() message!: string;
  @ViewChild('toast') toast!: ElementRef;

  timeout: any;

  ngAfterViewInit(): void {
    this.toast.nativeElement.classList.add('fade-in');

    this.timeout = setInterval(() => {
      this.toast.nativeElement.classList.add('fade-out');
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeout);
  }
}
