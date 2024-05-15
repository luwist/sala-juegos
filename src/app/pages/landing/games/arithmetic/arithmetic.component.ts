import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  standalone: true,
  imports: [],
  templateUrl: './arithmetic.component.html',
  styleUrl: './arithmetic.component.scss',
})
export class ArithmeticComponent implements OnInit, AfterViewInit {
  @ViewChild('timeBar') private _timeBar!: ElementRef;
  @ViewChild('containerOptions') private _containerOptions!: ElementRef;

  question: any;
  time: any;

  seconds: number = 20;

  data = [
    {
      level: 1,
      question: '1 + 1',
      answer: 2,
      options: [31, 2, 80],
    },
    {
      question: '3 x 4',
      answer: 12,
      options: [7, 12, 9],
    },
    {
      question: '15 ÷ 3',
      answer: 5,
      options: [3, 5, 7],
    },
    {
      question: '8 × 2',
      answer: 16,
      options: [10, 16, 20],
    },
    {
      question: '24 ÷ 4',
      answer: 6,
      options: [5, 6, 8],
    },
    {
      question: '7 × 6',
      answer: 42,
      options: [30, 36, 42],
    },
    {
      question: '36 ÷ 6',
      answer: 6,
      options: [4, 6, 8],
    },
    {
      question: '9 × 9',
      answer: 81,
      options: [72, 81, 90],
    },
    {
      question: '64 ÷ 8',
      answer: 8,
      options: [7, 8, 9],
    },
    {
      question: '5 × 7',
      answer: 35,
      options: [28, 35, 42],
    },
    {
      question: '49 ÷ 7',
      answer: 7,
      options: [6, 7, 8],
    },
    {
      question: '6 × 8',
      answer: 48,
      options: [40, 48, 56],
    },
    {
      question: '72 ÷ 9',
      answer: 8,
      options: [6, 8, 10],
    },
    {
      question: '12 × 3',
      answer: 36,
      options: [30, 36, 42],
    },
    {
      question: '48 ÷ 6',
      answer: 8,
      options: [6, 8, 10],
    },
    {
      question: '10 × 5',
      answer: 50,
      options: [40, 50, 60],
    },
    {
      question: '100 ÷ 5',
      answer: 20,
      options: [15, 20, 25],
    },
    {
      question: '9 × 7',
      answer: 63,
      options: [54, 63, 72],
    },
    {
      question: '81 ÷ 9',
      answer: 9,
      options: [7, 9, 11],
    },
    {
      question: '11 × 4',
      answer: 44,
      options: [36, 44, 52],
    },
    {
      question: '88 ÷ 4',
      answer: 22,
      options: [18, 22, 26],
    },
    {
      question: '15 + 7',
      answer: 22,
      options: [18, 22, 26],
    },
    {
      question: '30 - 9',
      answer: 21,
      options: [18, 21, 24],
    },
    {
      question: '42 + 18',
      answer: 60,
      options: [55, 60, 65],
    },
    {
      question: '55 - 15',
      answer: 40,
      options: [35, 40, 45],
    },
  ];

  ngOnInit(): void {
    let randomIndex = Math.floor(Math.random() * this.data.length - 0 + 0);

    this.question = this.data[randomIndex];
  }

  ngAfterViewInit(): void {
    this.time = setInterval(() => {
      this.seconds--;

      console.log(this.seconds);

      if (this.seconds <= 0) {
        clearInterval(this.time);
        console.log('Mostrar pantalla de game over');
      }
    }, 1000);
  }

  selectedNumber(number: number, e: any) {
    if (this.question.answer != number) {
      e.target.children[0].classList.remove('hidden');
    } else {
      let randomIndex = Math.floor(Math.random() * this.data.length - 0 + 0);

      this.question = this.data[randomIndex];

      const containerOptions = this._containerOptions.nativeElement;

      for (let i = 0; i < containerOptions.children.length; i++) {
        containerOptions.children[i].children[0].classList.add('hidden');
      }
    }
  }
}
