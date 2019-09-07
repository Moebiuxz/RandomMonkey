import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonkeyListComponent } from './content/monkey-list/monkey-list.component';
import { MonkeyRegisterComponent } from './content/monkey-register/monkey-register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NavbarComponent } from './content/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MonkeyListComponent,
    MonkeyRegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
