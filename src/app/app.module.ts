import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './base/reducers/user.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({user: userReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
