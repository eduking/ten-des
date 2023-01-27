import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent
  ]
})
export class PagesModule { }