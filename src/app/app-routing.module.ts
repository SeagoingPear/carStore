import { CadclientesComponent } from './components/cadclientes/cadclientes.component';
import { CadveiculosComponent } from './components/cadveiculos/cadveiculos.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadClientes', component: CadclientesComponent },
  { path: 'cadVeiculos', component: CadveiculosComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'veiculos', component: VeiculosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
