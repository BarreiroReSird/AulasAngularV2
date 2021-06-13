import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskChuckService {

  constructor(private httpAsk: HttpClient) { }

  link = "https://api.chucknorris.io/jokes/random";
  link2 = "https://api.chucknorris.io/jokes/search";

  jokeService = "from service";

  getJoke(){
    return this.httpAsk.get(this.link, {
      params: {'key': 'value'}
    });
  }

  getJokeFromCat(valueSearch: any){
    return this.httpAsk.get(this.link2, {
      params: {'query': valueSearch}
    })
  }
}
