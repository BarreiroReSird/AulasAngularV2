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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CaculatorComponent,
    EvandrefComponent,
    ClinicaComponent
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
