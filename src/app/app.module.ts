import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutusComponent,
    FooterComponent,
    SettingsComponent,
    PheaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ElishCustomMaterialModule,
    NgImageSliderModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
