import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';


import { AppComponent } from './app.component';

export declare let require: any;


export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/exporting');
  const sg = require('highcharts/modules/solid-gauge');
  const hcm = require('highcharts/highcharts-more');  
  dd(hc);
  hcm(hc);
  sg(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers:[
    {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
