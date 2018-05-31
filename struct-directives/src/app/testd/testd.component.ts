import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testd',
  template: `
<h1>Ex 1 index as</h1>
  <div *ngFor="let color of colores; index as i">
    <h2>{{i}} {{color}}</h2>
  </div>

  <h1>Ex 2 first as</h1>
  <div *ngFor="let color of colores; first as f">
    <h2>{{f}} {{color}}</h2>
  </div>
  
<h1>Ex 3 last as</h1>
  <div *ngFor="let color of colores; last as f">
    <h2>{{f}} {{color}}</h2>
  </div>

<h1>Ex 4 odd as</h1>
  <div *ngFor="let color of colores; odd as o">
    <h2>{{o}} {{color}}</h2>
  </div>  
  `,
  styles: []
})
export class TestdComponent implements OnInit {

  public colores = ["rojo","azul","verde","amarillo"];
  constructor() { }

  ngOnInit() {
  }

}
