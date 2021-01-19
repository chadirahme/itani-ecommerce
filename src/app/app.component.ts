import { Component } from '@angular/core';
import {BackendService} from "./services/backend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itani-ecommerce';

  constructor(private _backendService: BackendService,private _router: Router ) { }

  routes = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/contact', name: 'Contact' },
  ];

  logout(){
    this._backendService.logout();
    this._router.navigate(['/']);
  }
}
