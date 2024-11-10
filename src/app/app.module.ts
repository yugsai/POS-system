import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReceiptModalComponent } from './components/receipt-modal/receipt-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductListComponent,
    ReceiptModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
