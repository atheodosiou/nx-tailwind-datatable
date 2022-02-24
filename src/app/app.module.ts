import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTailwindDatatableModule } from 'ng-tailwind-datatable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTailwindDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
