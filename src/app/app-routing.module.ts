import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesComponent } from './pages/pages.component';

const routes:Routes = [
  {path: '', component: PagesComponent, children:[
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    {path: 'dashboard', component : DashboardComponent},
    {path: 'product', component : ProductComponent},
    {path: 'catalogue', component: CatalogueComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagesfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

