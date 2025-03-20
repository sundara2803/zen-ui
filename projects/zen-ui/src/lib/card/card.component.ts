import { Component, Input } from '@angular/core';

@Component({
  selector: 'zen-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Card Title';
}
