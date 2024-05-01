import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { ProductRoutingModule } from './product-routing.module';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
