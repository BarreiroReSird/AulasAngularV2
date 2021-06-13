import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { EvandrefComponent } from './components/evandref/evandref.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { AddComponent } from './components/ListaDeCompras/add/add.component';
import { BuyComponent } from './components/ListaDeCompras/buy/buy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FcolorComponent } from './components/pcolor/fcolor/fcolor.component';
import { PcolorComponent } from './components/pcolor/pcolor.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculator",component: CaculatorComponent},
  {path:"evAndref",component: EvandrefComponent},
  {path:"clinica",component: ClinicaComponent},
  {path:"notFound", component: NotFoundComponent},
  {path:"chuck", component: ChuckComponent},
  {path:"pcolor", component: PcolorComponent},
  {path:"fcolor", component: FcolorComponent},
  {path:"list", component: ListaDeComprasComponent,
    children:
      [
        {path:"listadd", component: AddComponent},
        {path:"listbuy", component: BuyComponent},
      ]
  },
  {path:"**", redirectTo: "notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
