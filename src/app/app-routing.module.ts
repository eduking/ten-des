import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PageRoutingModule } from './pages/pages-routing.module';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component'; 

const routes:Routes = [

  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NopagesfoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule,
   ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
