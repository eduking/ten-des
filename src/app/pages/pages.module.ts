import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  exports: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent
  ]
})
export class PagesModule { }

