import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-teste',
  template: `
  <h2>{{"Hola "+ parentData}}</h2>
  <button (click)="fireEvent()">Enviar Evento</button>
  `,
  styles: []
})
export class TesteComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Mensaje desde el componente hijo');
  }

}
