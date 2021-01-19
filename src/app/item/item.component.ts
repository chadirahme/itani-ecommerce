import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() name: string;
  @Input() price: string;
  @Input() descr: string;
  @Input() path: string;

  constructor() { }

  ngOnInit(): void {
  }

}
