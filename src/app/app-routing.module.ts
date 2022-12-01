// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { PagesRoutingModule } from './pages/pages-routing.module'; 
// import { AuthRoutingModule } from './auth/auth-routing.module'; 
// import { NopagesfoundComponent} from './nopagesfound/nopagesfound.component';
// import { CommonModule } from '@angular/common';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

// const routes: Routes = [
// { path: '**', component: NopagesfoundComponent },
// {path:'', redirectTo:'/dashboard', pathMatch:'full'},//path de rutas
//   {path:"**", component:NopagesfoundComponent},
//   {path:'login', component:LoginComponent},
//   {path:'register', component:RegisterComponent},
//   ]
//   @NgModule({
//   declarations: [],
//   imports: [
//   CommonModule,
//   RouterModule,
//   PagesRoutingModule,
//   RouterModule.forRoot(routes),
//   ],
//   exports:[RouterModule]
//   })
//   export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'catalogue', component: CatalogueComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
PagesRoutingModule,
AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

