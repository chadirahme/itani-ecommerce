import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  breakpoint: number;

  imageObject = [
    {
      image: '/assets/img/brands/aqglogo.jpeg',
      thumbImage: 'assets/img/brands/aqglogo.jpeg',
      title: ''
    },
    {
      image: '/assets/img/brands/grohelogo.jpeg',
      thumbImage: 'assets/img/brands/grohelogo.jpeg',
      title: ''
    },
    {
      image: '/assets/img/brands/cotalilogo.jpeg',
      thumbImage: 'assets/img/brands/cotalilogo.jpeg',
      title: 'Vitra'
    },
    {
      image: '/assets/img/brands/ITAlogo.jpg',
      thumbImage: 'assets/img/brands/ITAlogo.jpg',
      title: ''
    },
    {
      image: '/assets/img/brands/pederlologo.jpeg',
      thumbImage: 'assets/img/brands/pederlologo.jpeg',
      title: ''
    },

  ];

  tiles = [
    {text: 'One', cols: 1, rows: 1, color: '#142A5C', image: '/assets/img/brands/aqglogo.jpeg', routerLink:'/'},
    {text: 'Two', cols: 1, rows: 1, color: '#B7A0E8', image: '/assets/img/brands/grohelogo.jpeg',routerLink:'/'},
    {text: 'Three', cols: 1, rows: 1, color: '#FF0000', image: '/assets/img/brands/cotalilogo.jpeg',routerLink:'/'},
    {text: 'Four', cols: 1, rows: 1, color: '#D9EDD9', image: '/assets/img/brands/ITAlogo.jpg',routerLink:'/ita'},
    {text: 'Four', cols: 1, rows: 1, color: '#D9EDD9', image: '/assets/img/brands/pederlologo.jpeg',routerLink:'/'},
    {text: 'Four', cols: 1, rows: 1, color: '#D9EDD9', image: '/assets/img/brands/vitralogo.jpg',routerLink:'/'},
  ];

  constructor() {
    this.breakpoint=3;
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  onResize(event:any):void {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

}
