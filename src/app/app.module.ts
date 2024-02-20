import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDeepSearchModule } from 'projects/ngx-deep-search/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxDeepSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
