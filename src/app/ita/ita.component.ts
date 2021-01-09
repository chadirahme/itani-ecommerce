import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ita',
  templateUrl: './ita.component.html',
  styleUrls: ['./ita.component.css']
})
export class ItaComponent implements OnInit {

  breakpoint: number;
  constructor() {
    this.breakpoint=4;
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }

}
