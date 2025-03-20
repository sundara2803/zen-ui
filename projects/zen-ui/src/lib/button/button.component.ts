import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zen-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports:[NgClass]
})
export class ButtonComponent {
  @Input() label: string = 'Click me';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';

  get buttonClass(): string {
    return `btn-${this.type}`;
  }
}

