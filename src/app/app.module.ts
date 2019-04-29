import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    MessageModule,
    HttpClientModule,
    ButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
