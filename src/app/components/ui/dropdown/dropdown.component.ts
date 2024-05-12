import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  private _toggle: boolean = false;

  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;

  toggle(): void {
    this._toggle = !this._toggle;

    if (this._toggle) {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  showMenu(): void {
    const dropdownMenu = this._dropdownMenu.nativeElement;

    dropdownMenu.style.display = 'block';
  }

  hideMenu(): void {
    const dropdownMenu = this._dropdownMenu.nativeElement;

    dropdownMenu.style.display = 'none';
  }

  onMouseLeave(): void {
    console.log('Cerrar');
  }
}
