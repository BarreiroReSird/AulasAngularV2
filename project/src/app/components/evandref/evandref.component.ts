import { Component, OnInit } from '@angular/core';

interface Team {
  name: string;
  drivers: Driver[];
  image: string;
}

interface Driver {
  name: string;
  image: string;
}

@Component({
  selector: 'app-evandref',
  templateUrl: './evandref.component.html',
  styleUrls: ['./evandref.component.css']
})
export class EvandrefComponent implements OnInit {
  teams: Team[];
  chosenTeam: Team | undefined; /* Equipa escolhida no botao */

  background : string;

  cor: string ="black";

  tam: number = 15;
  tam2: number = 100;

  constructor() {
    this.teams = [
      {
        name: 'Mercedes AMG Petronas F1 Team',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Lewis Hamilton',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png',
          },
          {
            name: 'Valtteri Bottas',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Red Bull Racing Honda',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Max Verstappen',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png',

          },
          {
            name: 'Sergio Perez',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png'
          }
        ]
      },
      {
        name: 'Scuderia Ferrari Mission Winnow',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/ferrari.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Charles Leclerc',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png',
          },
          {
            name: 'Carlos Sainz',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'McLaren F1 Team',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/mclaren.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Daniel Ricciardo',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png',
          },
          {
            name: 'Lando Norris',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Scuderia AlphaTauri Honda',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/alphatauri.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Pierre Gasly',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png',
          },
          {
            name: 'Yuki Tsunoda',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Aston Martin Cognizant F1 Team',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/aston-martin.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Sebastian Vettel',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png',
          },
          {
            name: 'Lance Stroll',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Alpine F1 Team',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/alpine.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Fernando Alonso',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png',
          },
          {
            name: 'Esteban Ocon',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Alfa Romeo Racing ORLEN',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/alfa-romeo-racing.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Kimi Räikkönen',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col/image.png',
          },
          {
            name: 'Antonio Giovinazzi',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/A/ANTGIO01_Antonio_Giovinazzi/antgio01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Uralkali Haas F1 Team',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/haas-f1-team.png.transform/6col/image.png',
        drivers: [
          {
            name: 'Mick Schumacher',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col/image.png',
          },
          {
            name: 'Nikita Mazepin',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/N/NIKMAZ01_Nikita_Mazepin/nikmaz01.png.transform/2col/image.png',
          }
        ]
      },
      {
        name: 'Williams Racing',
        image: 'https://www.formula1.com/content/dam/fom-website/teams/2021/williams.png.transform/6col/image.png',
        drivers: [
          {
            name: 'George Russell',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png',
          },
          {
            name: 'Nicholas Latifi',
            image: 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/2col/image.png',
          }
        ]
      },
    ];
  }

  ngOnInit(): void {
  }

  changeColor(){
    this.background = "red";
    this.background = this.background == "red" ? "white" : "red";
  }

  /* Parte 2 */

   /* Cor inicial da barra de texto */

  changecolor(corR:string){
    this.cor=corR;
  }

  esconder(refA){
    if(refA.style.opacity == '0'){
    refA.style.opacity = '1';
    } else{
      refA.style.opacity = '0'
    }
  }


  altura(refA:HTMLElement){
    refA.style.height = this.tam+"px";
    this.tam*= 2;
  }

  largura(refA:HTMLElement){
    refA.style.width = this.tam2+"px";
    this.tam2*= 2;
  }

  showHide(mtsh:HTMLElement) {
    mtsh.classList.toggle("hidden");
  }


  chooseTeam(teamName: string) {
    if (this.chosenTeam && teamName === this.chosenTeam.name) {
      this.chosenTeam = undefined;
      return;
    }
    this.chosenTeam = this.teams.find((t) => t.name === teamName);
  }
}
