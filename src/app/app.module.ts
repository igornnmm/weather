import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdButtonModule, MdTableModule} from '@angular/material';
import {Forecast2Component} from "./Components/forecast2.component";
import {LocationComponent} from "./Components/location.component";
import {CdkTableModule} from '@angular/cdk';
import {HttpService} from "./Services/http.service";

@NgModule({
  declarations: [
    AppComponent,
    Forecast2Component,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, MdButtonModule, MdTableModule,
    CdkTableModule
  ],
  providers: [HttpService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
