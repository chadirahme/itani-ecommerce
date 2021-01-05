import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'Angular';
  imageObject = [
    {
    image: '/assets/img/slides/slide01.jpg',
    thumbImage: 'assets/img/slides/slide01.jpg',
    title: ''
  },
    {
      image: '/assets/img/slides/slide02.jpg',
      thumbImage: 'assets/img/slides/slide02.jpg',
      title: ''
    },
    {
      image: '/assets/img/slides/slide03.jpg',
      thumbImage: 'assets/img/slides/slide03.jpg',
      title: 'Vitra'
    },
    {
      image: '/assets/img/slides/slide04.jpg',
      thumbImage: 'assets/img/slides/slide04.jpg',
      title: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
