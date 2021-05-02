import { Component, OnInit } from '@angular/core';
import { Phonebook } from 'src/app/service/phonebook';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

  name: string = "Raquel";
  age: string = "20"
  phoneService: Phonebook;

  constructor( pService: Phonebook) {
    this.phoneService = pService;
   }

  ngOnInit(): void {
  }

}
