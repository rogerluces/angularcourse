import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testo',
  template: `
  <h2>Welcome {{name}}
  </h2>
  <button (click)="onClick($event)">Saluda!</button>
  <button (click)="greeting='Bienvenido Roger'">Saluda!</button>
  {{greeting}}
  `,
  styles: []
})
export class Test2Component implements OnInit {
  public name = "Roger";
  public hasError = false;
  public isSpecial = true;
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }
}
