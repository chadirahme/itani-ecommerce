import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tabClick(event: MatTabChangeEvent): void {
    const label = event.tab.textLabel;
    if(label==="Products")
    {
      console.log("function want to implement");
      this.router.navigateByUrl('/products');
    }
    else
      this.router.navigateByUrl('/');
  }

}
