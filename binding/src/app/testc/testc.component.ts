import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testc',
  template: `
  <input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styles: []
})
export class TestcComponent implements OnInit {

  public name="";
  constructor() { }

  ngOnInit() {
  }

}
