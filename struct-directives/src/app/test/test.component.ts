import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf="displayName; else elseBlock">
  Angular Test
  </h2>

  <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2>
  </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
