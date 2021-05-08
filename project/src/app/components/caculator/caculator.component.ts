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
  btn1:number;
  btn2:string;
  btn3:number;
  resultT=0;

  constructor() { }

  calcula(){
    this.resultado = eval(this.valorX + this.sinal + this.valorY);
  }

  calculat(){
    this.resultT = eval(this.btn1 + this.btn2 + this.btn3);
  }

  ngOnInit(): void {
  }

}
