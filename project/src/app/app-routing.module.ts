import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { EvandrefComponent } from './components/evandref/evandref.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculator",component: CaculatorComponent},
  {path:"evAndref",component: EvandrefComponent},
  {path:"clinica",component: ClinicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
