import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperComponentsComponent } from './super-components/super-components.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyComponent2 } from './zippy2/zippy2.component';
import { BananaInABoxComponent } from './banana-in-a-box/banana-in-a-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuperComponentsComponent, ZippyComponent, ZippyComponent2, BananaInABoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'introduction';
}
