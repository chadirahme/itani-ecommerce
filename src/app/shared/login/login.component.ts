import { Component, OnInit,AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuth } from '@angular/fire/auth';
// import { firebase } from '@firebase/app';
import { environment } from '../../../environments/environment';
// import { Observable } from "rxjs/Rx";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit  {
  socialAuth: boolean = false; // show Google and FB Sign in only when social auth is enabled
  isLoggedIn: boolean = false;
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;

  constructor(public afAuth: AngularFireAuth, private _router: Router, private _backendService: BackendService) { }

  ngOnInit() {
   // this.socialAuth = environment.socialAuthEnabled; // show Google and FB Sign in only when social auth is enabled
  }

  ngAfterViewInit(){
    if(this.afAuth.authState) {
      this.getAuthStatus();
    }
  }

  getAuthStatus(){
    this._backendService.redirectLogin().then(function(result) {
      console.log("result>> " + result);
      if (result.credential) {
        console.log(result);
        window.localStorage.setItem("displayName",result.user.displayName);
        window.localStorage.setItem("email",result.user.email);
        window.localStorage.setItem("picture",result.user.photoURL);
        this.isLoggedIn = true;
      }
    }).catch(
      (err:any) => {
        this.error = err;
      })
  }

  login(loginType:string, formData:any) {
    this.dataLoading=true;
    this._backendService.login(loginType, formData)
     .then(
     (success) => {
          if(formData) {
            window.localStorage.setItem("email",formData.email);
          }
          console.log(success);
          this.dataLoading=false;
          this._router.navigate(['/setproduct']);
        }).catch(
     (err) => {
       console.log(err);
          this.error = err;
       this.dataLoading=false;
        })
     ;

  }
}
