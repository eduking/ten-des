import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
//rutas hijas
{
path: '',
component: PagesComponent,
children: [
  { path: 'dashboard', component: DashboardComponent },
{ path: 'product', component: ProductComponent },
{ path: 'catalogue', component: CatalogueComponent },
{ path:'', redirectTo:'/dashboard', pathMatch:'full'},
]
},
// Pueden haber otros tipos de rutas:
// { path: 'path/:routeParam', component: MyComponent },
// { path: 'staticPath', component: .... },
// { path: '**', component: ...... },
// { path: 'oldPath', redirectTo: 'staticPath' },
// { path: '...', component: ... , data: {message: ‘Custom’}},
// {
//   path: 'dashboard/',
//   component: PagesComponent,
//   children: [
//   { path: '', component: DashboardComponent },
//   { path: 'progress', component: ProgressComponent },
//   { path: 'grafica1', component: Grafica1Component },
//   { path:'', redirectTo:'/dashboard', pathMatch:'full'}, eliminar
//   ]
//   },

];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PagesRoutingModule { }
