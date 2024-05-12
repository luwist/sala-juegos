import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  private _toggle: boolean = false;

  @ViewChild('dropdown') private _dropdown!: ElementRef;
  @ViewChild('dropdownTrigger') private _dropdownTrigger!: ElementRef;
  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;

  toggle(): void {
    this._toggle = !this._toggle;

    if (this._toggle) {
      this.showMenu();
    } else {
      this.hideMenu();
    }

    console.log(this._toggle);
  }

  showMenu(): void {
    const dropdownMenu = this._dropdownMenu.nativeElement;

    dropdownMenu.classList.add('dropdown-menu-open');

    window.addEventListener('click', (e: any) => {
      const element = e.target.className;

      if (element === '' || element === 'main') {
        this.hideMenu();

        this._toggle = false;
      }
    });

    // window.removeEventListener('click');
  }

  hideMenu(): void {
    const dropdownMenu = this._dropdownMenu.nativeElement;

    dropdownMenu.classList.remove('dropdown-menu-open');
  }

  onMouseLeave(): void {
    console.log('Cerrar');
  }

  selectedItem(e: Event): void {
    console.log(e);
  }
}
