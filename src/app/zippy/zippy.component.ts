import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.sass'
})
export class ZippyComponent {
  @Input() isVisible = true;
  btntext = "afficher";
  @Input() title = "default title"

  toggleIsVisible(){
    this.isVisible = !this.isVisible;
  }
}
