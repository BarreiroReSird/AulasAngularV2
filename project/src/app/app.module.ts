import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { FormsModule } from '@angular/forms';
import { EvandrefComponent } from './components/evandref/evandref.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddComponent } from './components/ListaDeCompras/add/add.component';
import { BuyComponent } from './components/ListaDeCompras/buy/buy.component';
import { from } from 'rxjs';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { PcolorComponent } from './components/pcolor/pcolor.component';
import { FcolorComponent } from './components/pcolor/fcolor/fcolor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CaculatorComponent,
    EvandrefComponent,
    ClinicaComponent,
    NotFoundComponent,
    AddComponent,
    BuyComponent,
    ListaDeComprasComponent,
    PcolorComponent,
    FcolorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
