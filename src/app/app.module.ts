import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { HttpService } from "./Services/http.service";

import { AppComponent } from './app.component';
import { Forecast2Component } from "./Components/Forecats/forecast2.component";
import { LocationComponent } from "./Components/Location/location.component";
import {ForecastComponent} from "./Components/Forecats/forecast.component";


@NgModule({
  declarations: [
    ForecastComponent,
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
