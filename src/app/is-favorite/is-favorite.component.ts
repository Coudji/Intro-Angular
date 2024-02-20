import { Component, EventEmitter, Input, Output } from '@angular/core';
//composant pour la correction de l'exo
@Component({
  selector: 'app-is-favorite',
  standalone: true,
  imports: [],
  template: `
    <span (click)='toggleIsFavorite()'>
      {{favoriteLabel}}
    </span>
  `,
  styleUrl: './is-favorite.component.sass'
})
export class IsFavoriteComponent {
  @Output() isFavoriteToggle = new EventEmitter();
  @Input() isFavorite: boolean = false;
  
  get favoriteLabel(){
    if (this.isFavorite){
      return '★';
    }
    return '☆';
  }

  toggleIsFavorite(){
    this.isFavorite = !this.isFavorite;
    this.isFavoriteToggle.emit(this.isFavorite);
  }
}
