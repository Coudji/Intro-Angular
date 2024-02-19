import { Component } from '@angular/core';

@Component({
  selector: 'app-super-components',
  standalone: true,
  imports: [],
  templateUrl: './super-components.component.html',
  styleUrl: './super-components.component.sass'
})
export class SuperComponentsComponent {
  name = 'Ma super banane';
  isHidden = true;
  isDisabled = true;
  isPurple = true;

  toggleIsPurple() {
    this.isPurple = !this.isPurple;
  }
}
