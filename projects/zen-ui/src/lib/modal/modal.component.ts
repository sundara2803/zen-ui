import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zen-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports:[NgIf]
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
