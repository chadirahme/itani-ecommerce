import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ElishCustomMaterialModule} from "./shared/custom.material.module";
import { SettingsComponent } from './settings/settings.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {NgImageSliderModule} from "ng-image-slider";
import {PheaderComponent} from "./shared/pheader/pheader.component";
import { ProductsComponent } from './products/products.component';
import { ItaComponent } from './ita/ita.component';
import { ContactComponent } from './contact/contact.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { firebase } from '@firebase/app';
import {FileSizePipe} from "./shared/dropzone/filesize.pipe";
import {DropZoneDirective} from "./shared/dropzone/dropzone.directive";
import {FileUploadComponent} from "./shared/dropzone/fileupload.component";
import {AuthGuardAdmin} from "./services/auth-guard.admin.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginComponent} from "./shared/login/login.component";
import { BrandsComponent } from './brands/brands.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AboutusComponent,
    FooterComponent,
    SettingsComponent,
    PheaderComponent,
    HomeComponent,
    ProductsComponent,
    ItaComponent,
    ContactComponent,
    SetproductComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
    BrandsComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ElishCustomMaterialModule,
    NgImageSliderModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'itaniweb'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireStorageModule, BrowserAnimationsModule
  ],
  providers: [AuthGuardService, AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
