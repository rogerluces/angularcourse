import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TestbComponent } from './testb/testb.component';
import { TestcComponent } from './testc/testc.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    TestbComponent,
    TestcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
