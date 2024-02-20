import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperComponentsComponent } from './super-components/super-components.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyComponent2 } from './zippy2/zippy2.component';
import { BananaInABoxComponent } from './banana-in-a-box/banana-in-a-box.component';
import { TrucComponent } from './truc/truc.component';
import { ExoFavoriteComponent } from './exo-favorite/exo-favorite.component';
import { IsFavoriteComponent } from './is-favorite/is-favorite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuperComponentsComponent, ZippyComponent, ZippyComponent2, BananaInABoxComponent, TrucComponent, ExoFavoriteComponent, IsFavoriteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'introduction';

  alertTruc(value: string){
    alert(value);
  }

  consoleTruc(value: string){
    console.log(value);
  }

  favoriteButtonClickCount: number = 0;
  favName1= "Louttre";
  favName2= "Banane";
  favName3= "Mauve";

  updateFavoriteCount(isFavorite: boolean) {
    if (isFavorite) {
      this.favoriteButtonClickCount++;
    }
  }

  //correction de l'exo
  favoriteClickCount = 0;
  becameFavoriteCount = 0;

  incrementFavoriteCount(isFavorite:boolean) {
    this.favoriteClickCount++;

    if(isFavorite){
      this.becameFavoriteCount++
    }
  }

}
