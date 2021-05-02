import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evandref',
  templateUrl: './evandref.component.html',
  styleUrls: ['./evandref.component.css']
})
export class EvandrefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  background : string;

  changeColor(){
    this.background = "red";
    this.background = this.background == "red" ? "white" : "red";

  }

}
