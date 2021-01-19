import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../services/backend.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit,OnDestroy {

  dataLoading: boolean = false;
  private querySubscription:any;
  breakpoint: number;
  category:string;
  data: any[];
  profileUrl:Observable<string>;
  cols = 1;

  constructor(private route: ActivatedRoute, private _backendService: BackendService, private _storage: AngularFireStorage) {
    this.breakpoint=4;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.category = params['name']; // (+) converts string 'id' to a number
      console.log(this.category);
      //this.title=this.category;
      this.getData();
    });
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getBrands('product' , this.category)
      .subscribe((members:any) => {
      this.data=members;
        this.dataLoading = false;
        this.getImages();
        console.log(members);
      });
  }

  getImages(){
    for (const product of this.data) {
      console.log(product._id);
     // this.getPic(file.path);
      const ref = this._storage.ref(product.path);
      product.path= ref.getDownloadURL();
    }
  }

  getPic(picId:any) {
    console.log(picId);
    const ref = this._storage.ref(picId);
    return ref.getDownloadURL();
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
