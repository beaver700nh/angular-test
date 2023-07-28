import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlerterComponent } from './alerter/alerter.component';
import { CubeComponent } from './cube/cube.component';

@NgModule({
  declarations: [
    AppComponent,
    AlerterComponent,
    CubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
