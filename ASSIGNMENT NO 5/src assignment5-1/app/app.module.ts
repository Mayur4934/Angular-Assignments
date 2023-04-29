import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';

@NgModule({
  declarations: [
    
    FirstCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstCompComponent]
})
export class AppModule { }
