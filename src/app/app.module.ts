import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule }from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/master/master.component';
import { DetailComponent } from './components/detail/detail.component';
import { NonSelectedComponent } from './components/non-selected/non-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    NonSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
