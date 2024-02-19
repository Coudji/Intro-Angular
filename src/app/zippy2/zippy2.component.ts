import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy2',
  standalone: true,
  imports: [],
  templateUrl: './zippy2.component.html',
  styleUrl: './zippy2.component.sass'
})
export class ZippyComponent2 {
  @Input() isVisible = true;
  @Input() title = "default title"
  
  get btnText(){
    if(this.isVisible){
      return 'Cacher';
    }
    return 'Afficher';
  }

  toggleIsVisible(){
    this.isVisible = !this.isVisible;
  }
}
