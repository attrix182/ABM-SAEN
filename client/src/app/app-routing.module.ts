import { ListadoComponent } from './pages/listado/listado.component';
import { AltaComponent } from './pages/alta/alta.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component:  LandingComponent},
  { path: 'alta', component:  AltaComponent},  
  { path: 'listado', component:  ListadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
