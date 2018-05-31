import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{ name }}</h2>
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name | slice:3:5 }}</h2>
  <h2>{{ person | json }}</h2>

  <h2>{{ 6.754 | number:'1.2-3'}}</h2>
  <h2>{{ 6.754 | number:'3.4-5'}}</h2>
  <h2>{{ 6.754 | number:'3.1-2'}}</h2>


  <h2>{{ 0.25 | percent }}</h2>

  <h2>{{ 0.25 | currency }}</h2>
  <h2>{{ 0.25 | currency: 'GBP': 'code' }}</h2>

  <h2>{{fecha}}</h2>
  <h2>{{fecha|date:'short'}}</h2>
  <h2>{{fecha|date:'shortDate'}}</h2>
  <h2>{{fecha|date:'mediumDate'}}</h2>
  <h2>{{fecha|date:'longDate'}}</h2>
  <h2>{{fecha|date:'shortTime'}}</h2>
  <h2>{{fecha|date:'mediumTime'}}</h2>
  <h2>{{fecha|date:'longTime'}}</h2>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Rogerman";
  public message = "Bienvenido a Angular tamo listo ";
  public person = {
    "firstName":"Roger",
    "lastName":"Luces"
  }

  public fecha = new Date();
  constructor() { }

  ngOnInit() {
  }

}
