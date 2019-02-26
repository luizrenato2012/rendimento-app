import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
