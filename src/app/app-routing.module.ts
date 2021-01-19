import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from "./shared/aboutus/aboutus.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ItaComponent} from "./ita/ita.component";
import {ContactComponent} from "./contact/contact.component";
import {SetproductComponent} from "./admin/setproduct/setproduct.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginComponent} from "./shared/login/login.component";
import {BrandsComponent} from "./brands/brands.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '1', redirectTo: '/aboutus',pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'brands/:name', component: BrandsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'setproduct', component: SetproductComponent ,canActivate: [AuthGuardService] },
  { path: 'ita/:name', component: ItaComponent },
  // { path: '**', redirectTo: '/aboutus',pathMatch: 'full' },
  { path: '**', redirectTo: '/',pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
