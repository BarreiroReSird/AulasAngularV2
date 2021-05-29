import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fcolor',
  templateUrl: './fcolor.component.html',
  styleUrls: ['./fcolor.component.css']
})
export class FcolorComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }

  color : string = ""

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => this.color = params.color
    )
  }

}
