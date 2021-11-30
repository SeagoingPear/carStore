import { ApiveiculosService } from './services/apiveiculos/apiveiculos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { CadclientesComponent } from './components/cadclientes/cadclientes.component';
import { CadveiculosComponent } from './components/cadveiculos/cadveiculos.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeiculosComponent,
    DetalhesComponent,
    CadclientesComponent,
    CadveiculosComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiveiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
