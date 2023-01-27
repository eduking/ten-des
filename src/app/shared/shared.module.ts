import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    NavLeftComponent,
    SharedComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    NavLeftComponent,
    SharedComponent,
  ]
})
export class SharedModule { }
