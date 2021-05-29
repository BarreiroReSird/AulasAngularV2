import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/class/artigo';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  listaService : ListService;

  constructor(lista: ListService) {
    this.listaService = lista;
  }

  ngOnInit(): void {
  }

  Comprar(artigo : Artigo){
    artigo.carrinho = true;
    console.log("Artigo", artigo)
  }

}







