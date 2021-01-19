import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {HttpClient} from "@angular/common/http";
import {take, map} from "rxjs/internal/operators";
import {Products} from "../model/products";
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private _defaultCenterColl: string = "stores";
  private _userColl: string = "userdb";
  private _eStoreColl: string = "itanistore";
  authState: any = null;


  constructor(private _http: HttpClient, public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.authState.subscribe( authState => {
      this.authState = authState;
    });
  }

  getUser(): Promise<any> {
    return this.afAuth.authState.pipe(take(1)).toPromise();
  }

  getConfig(){
    return environment.social;
  }

  login(loginType:string, formData) {
    return this.afAuth.signInWithEmailAndPassword(formData.email, formData.password);
  }

  logout() {
    window.localStorage.removeItem("displayName");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("picture");
    window.localStorage.removeItem("center");
    window.localStorage.removeItem("token");
    return this.afAuth.signOut();
  }

  // method to retreive firebase auth after login redirect
  redirectLogin() {
    return this.afAuth.getRedirectResult();
  }

  public getCartTotal(): any {
    let fakeresponse = 10;
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(fakeresponse);
      }, 2000);
    });

    return studentsObservable;
  }

  getUserStatus(): any {
    let fakeresponse = true;
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(fakeresponse);
      }, 2000);
    });

    return studentsObservable;
  }

  getProducts11(col:any){
    let fakeresponse=[{
      'cat':"test",
      'name':"name of prod",
      'price':10,
      '_id':"123"
    }];

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(fakeresponse);
      }, 2000);
    });

  }

  // set product functions start
  get timestamp() {
    var d = new Date();
    return d;
    //return firebase.firestore.FieldValue.serverTimestamp();
  }

  getCollectionURL(coll:string){
    let localCenter = localStorage.getItem('center') ? localStorage.getItem('center') : this._defaultCenterColl;
    return this._eStoreColl + "/" + localCenter + "/" + coll;
    /**
     let _collURL = "";
     if (filter == "customer") { _collURL = this._custColl; }
     if (filter == "lead") { _collURL = this._leadColl; }
     return _collURL;
     */
  }

  getBrands(coll: string , brand: string) {
    return this.afs.collection(this.getCollectionURL(coll), ref =>
      ref.where('category', '==', brand)
    ).valueChanges()
      .pipe(map(collection => {
        return collection.map(b =>  new Products(b));
      }));
  }

  getProducts(coll: string) {
    return this.afs.collection(this.getCollectionURL(coll), ref =>
      ref//.where('delete_flag', '==', false)
        .orderBy('name', 'desc')
    ).valueChanges()
      .pipe(map(collection => {
        return collection.map(b =>  new Products(b));
      }));
  }

  setProduct(coll: string, formData: any, docId?: string) {
    coll =this.getCollectionURL(coll);  //this._eStoreColl + "/" + localStorage.getItem('center') + "/" + coll;
    return this.setNewDoc(coll, formData);
  }

  setNewDoc(coll: string, data: any, docId?: any) {
    const id = this.afs.createId();
    const item = { id, name };
    const timestamp = this.timestamp;
    var docRef = this.afs.collection(coll).doc(item.id);
    return docRef.set({
      ...data,
      _id: id,
      updatedAt: timestamp,
      createdAt: timestamp,
      delete_flag: "N",
      //username: this.authState.displayName,
      //useremail: this.authState.email
    });
  }

  setProductPic(filePath:string, coll:string, docId?:string){
   // coll = this._eStoreColl + "/" + localStorage.getItem('center') + "/" + coll;
    coll =this.getCollectionURL(coll);
    var docRef = this.afs.collection(coll).doc(docId);
    return docRef.set({
      path: filePath
    },{merge: true});
  }

  deleteProductPic(coll:string, docId:string){
    coll =this.getCollectionURL(coll);
    var docRef = this.afs.collection(coll).doc(docId);
    return docRef.set({
      path: null
    },{merge: true});
  }

}
