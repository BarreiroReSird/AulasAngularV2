import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  valorX=0;
  valorY=0;
  sinal:string;
  resultado=0;

  constructor() { }

  calcula(){
    this.resultado = eval(this.valorX + this.sinal + this.valorY);
  }

  ngOnInit(): void {
  }

}
