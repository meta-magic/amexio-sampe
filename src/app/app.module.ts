import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AmexioWidgetModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
