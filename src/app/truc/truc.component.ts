import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-truc',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" name="truc" [(ngModel)]="inputValue" (keyup.enter)="fireTruc()">
  `,
  styleUrl: './truc.component.sass'
})
export class TrucComponent {
  inputValue="";
  @Output() trucEmitter = new EventEmitter();
  fireTruc(){
    console.log('fired');
    this.trucEmitter.emit(this.inputValue)
  }
}
