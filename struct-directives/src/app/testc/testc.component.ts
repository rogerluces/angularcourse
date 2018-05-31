import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testc',
  template: `

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'rojo'">Selecciono el color rojo</div>
    <div *ngSwitchCase="'azul'">Selecciono el color azul</div>
    <div *ngSwitchCase="'verde'">Selecciono el color verde</div>
    <div *ngSwitchDefault>No escogio ninguno</div>
  </div>
  `,
  styles: []
})
export class TestcComponent implements OnInit {
  public color = "rojo";
  constructor() { }

  ngOnInit() {
  }

}
