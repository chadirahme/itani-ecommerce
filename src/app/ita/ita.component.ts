import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ita',
  templateUrl: './ita.component.html',
  styleUrls: ['./ita.component.css']
})
export class ItaComponent implements OnInit {

  breakpoint: number;
  category:string;
  constructor(private route: ActivatedRoute) {
    this.breakpoint=4;
  }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      console.log(params);
      this.category = params['name']; // (+) converts string 'id' to a number
       console.log(this.category);
       //this.title=this.category;
      //this.loadProducts();
    });
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }

}
