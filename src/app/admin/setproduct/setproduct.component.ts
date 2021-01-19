import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit ,OnDestroy{

  members?: any[];
  dataSource: MatTableDataSource<any>;
  myDocData:any;
  data:any;

  currentDate:any;
  currentDate7:any;
  toggleField: string;
  state: string = '';
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription:any;
  profileUrl?: Observable<string | null>;
  takeHostSelfie = false;
  showHostSelfie = false;
  myDocId?:any;
  price:number=0;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //@ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['category', 'name','descr' ,'price', '_id'];
  selectedCountry: string = "ITA SANITARY";

  constructor(private _backendService: BackendService , private _storage: AngularFireStorage) {
    this.toggleField = "searchMode";
    this.dataSource = new MatTableDataSource(this.members);
   // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.toggleField = "searchMode";
    this.currentDate = new Date();
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.currentDate7 = new Date();
    this.currentDate7.setDate(this.currentDate.getDate() - 7);
  }

  //mat table paginator and filter functions
   ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getProducts('product')
      .subscribe((members:any) => {
      console.log(members);
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
       // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataLoading = false;
      });
  }

  toggle(filter?:any) {
    this.dataLoading = false;
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
  }
  getFilterData(filters:any){

  }

  setData(formData:any) {
    console.log(formData);
    //formData.tags = formData.tags.split(',');
    //console.log(formData.tags);

    this.dataLoading = true;
    this._backendService.setProduct('product', formData).then((res) => {
      this.savedChanges = true;
      this.dataLoading = false;
    }).catch(error => {
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    });


  }


  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

  getPic(picId:any) {
    const ref = this._storage.ref(picId);
    this.profileUrl = ref.getDownloadURL();
  }

  deleteProductPic(docId:any){
    if (confirm("Are you sure want to delete this picture ?")) {
      this._backendService.deleteProductPic('product',docId);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  }
