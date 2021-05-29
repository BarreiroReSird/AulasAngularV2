import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/class/artigo';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listaService : ListService;

  constructor(private lista : ListService) {
    this.listaService = lista;

  }

  ngOnInit(): void {
  }

  AdicionarLista(nome, preco){
    this.listaService.listaCompras.push(new Artigo(nome, preco));
  }

}
