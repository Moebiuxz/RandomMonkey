import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonkeyListComponent } from './content/monkey-list/monkey-list.component';
import { MonkeyRegisterComponent } from './content/monkey-register/monkey-register.component';

@NgModule({
  declarations: [
    AppComponent,
    MonkeyListComponent,
    MonkeyRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
