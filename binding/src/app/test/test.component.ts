import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2 [class]="successClass">Titulo 2</h2>
  <h2 [class.text-danger]="hasError">Titulo 3</h2>
  <h1 [ngClass]="messageClasses">Titulo 4</h1>
`,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {
  public name = "Roger";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  
  constructor() { }

  ngOnInit() {
  }

}
