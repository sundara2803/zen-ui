import { Component } from '@angular/core';
import { ButtonComponent } from 'zen-ui';
import { CardComponent } from 'zen-ui';
import { ModalComponent } from 'zen-ui';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent, ModalComponent],
  templateUrl:'./app.component.html'
})
export class AppComponent {}
