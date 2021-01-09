import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itani-ecommerce';

  routes = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/contact', name: 'Contact' },
  ];

}
