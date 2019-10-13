import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndicatorChartsComponent } from './components/indicator-charts/indicator-charts.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IndicatorChartsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
