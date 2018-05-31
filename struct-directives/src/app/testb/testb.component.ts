import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testb',
  template: `

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>Angular test</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>Hidden</h2>
  </ng-template>
  `,
  styles: []
})
export class TestbComponent implements OnInit {

  constructor() { }
  public displayName = false;
  ngOnInit() {
  }

}
