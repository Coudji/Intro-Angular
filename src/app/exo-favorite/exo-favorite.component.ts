import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exo-favorite',
  standalone: true,
  imports: [],
  template: `
    <div>
      <span>{{favName}}</span>
      <span
        class="favorite-icon"
        [class.is-favorite]="isFavorite"
        (click)="toggleFavorite()">
        &#9733;
      </span>
    </div>
  `,
  styleUrl: './exo-favorite.component.sass'
})
export class ExoFavoriteComponent {
  @Input() favName: string = "";
  @Input() isFavorite: boolean = false;
  @Output() isFavoriteChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.isFavoriteChange.emit(this.isFavorite);
  }
}
