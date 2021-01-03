import { BackendService } from './../../services/backend.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData:any;
  counter:any;
  userStatusColor:string = "warn";

  constructor(private _backendservice: BackendService) {
    this.pageTitle='';
    this.iconTitle='';
    this.helpTitle='';
  }

  ngOnInit() {
    this.counter = 0;
    this.configData = this._backendservice.getConfig();
    this._backendservice.getCartTotal().subscribe(
      (res:any) => {
        this.counter = res;
      }
    );
    this._backendservice.getUserStatus().subscribe(
      (res:any) => {
        this.userStatusColor = res ? "primary" : "warn";
      }
    );
  }

}
