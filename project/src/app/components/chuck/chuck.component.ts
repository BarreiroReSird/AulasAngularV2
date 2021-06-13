import { Component, OnInit } from '@angular/core';
import { AskChuckService } from 'src/app/service/ask-chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(private chuckService : AskChuckService) { }

  ngOnInit(): void {
  }

  joke: string = "joke";
  result: any;

  jokes2: any = [];

  getJoke() {
    // this.joke = this.chuckService.jokeService;
    this.chuckService.getJoke().subscribe(
      data => {
        this.result = data;
        this.joke = this.result.value
      }
    );
  }

  getMoreJokes(valueSearch: any){
    this.chuckService.getJokeFromCat(valueSearch).subscribe(
      data => {
        this.jokes2 = data;
      }
    )
  }

}
