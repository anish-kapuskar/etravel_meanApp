import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component' ;
import {ContactComponent} from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import {BudgetComponent} from './components/budget/budget.component';
import { AddBankAccountComponent } from './components/addbankaccount/addbankaccount.component'

import {ProductsListComponent} from './components/products-list/products-list.component';

import {BeachesComponent} from './components/beaches/beaches.component';
import {TrekkingComponent} from './components/trekking/trekking.component';
import {TrekkingPackage1Component} from './components/trekking-package1/trekking-package1.component';
import {SkydivingComponent} from './components/skydiving/skydiving.component';
import {SkydivingPackage1Component} from './components/skydiving-package1/skydiving-package1.component';
import {CitiesComponent} from './components/cities/cities.component';
import {CartComponent} from './components/cart/cart.component';

import {TrekkingPackage2Component} from './components/trekking-package2/trekking-package2.component';
import {TrekkingPackage3Component} from './components/trekking-package3/trekking-package3.component';
import {TrekkingPackage4Component} from './components/trekking-package4/trekking-package4.component';

import {SkydivingPackage2Component} from './components/skydiving-package2/skydiving-package2.component';
import {SkydivingPackage3Component} from './components/skydiving-package3/skydiving-package3.component';
import {SkydivingPackage4Component} from './components/skydiving-package4/skydiving-package4.component';

import {BeachPackage1Component} from './components/beach-package1/beach-package1.component';
import {BeachPackage2Component} from './components/beach-package2/beach-package2.component';
import {BeachPackage3Component} from './components/beach-package3/beach-package3.component';
import {BeachPackage4Component} from './components/beach-package4/beach-package4.component';

import {CityPackage1Component} from './components/city-package1/city-package1.component';
import {CityPackage2Component} from './components/city-package2/city-package2.component';
import {CityPackage3Component} from './components/city-package3/city-package3.component';
import {CityPackage4Component} from './components/city-package4/city-package4.component';

import { PaypalComponent } from './components/paypal/paypal.component';


const routes: Routes = [

  {path:'', component: ProductsListComponent},
  {path:'home', component: HomepageComponent},
  {path:'login', component: LoginComponent},
  {path:'signuppage', component: SignuppageComponent},
  {path:'login', component: LoginComponent},
  {path:'howitworks', component:HowitworksComponent},
  {path:'contact',component:ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login', component: LoginComponent},
  {path:'',pathMatch:'full', redirectTo:'signup' },
  {path:'signup', component: SignuppageComponent},
  {path:'login', component: LoginComponent},
  {path:'blog', component: BlogComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'budget', component: BudgetComponent},
  {path:'addAccount', component: AddBankAccountComponent},
  
    { path: 'products-list', component: ProductsListComponent },

  { path: 'beaches', component: BeachesComponent },
  { path: 'trekking', component: TrekkingComponent } ,
  { path: 'trekkingPackage1', component: TrekkingPackage1Component } ,
  { path: 'skydiving', component: SkydivingComponent } ,
  { path: 'skydivingPackage1', component: SkydivingPackage1Component } ,
  { path: 'cities', component: CitiesComponent },
  
  { path: 'cart', component: CartComponent },
    { path: 'trekkingPackage2', component: TrekkingPackage2Component },
  { path: 'trekkingPackage3', component: TrekkingPackage3Component },
  { path: 'trekkingPackage4', component: TrekkingPackage4Component },
  { path: 'skydivingPackage2', component: SkydivingPackage2Component },
  { path: 'skydivingPackage3', component: SkydivingPackage3Component },
  { path: 'skydivingPackage4', component: SkydivingPackage4Component },
  { path: 'beachPackage1', component: BeachPackage1Component },
  { path: 'beachPackage2', component: BeachPackage2Component },
  { path: 'beachPackage3', component: BeachPackage3Component },
  { path: 'beachPackage4', component: BeachPackage4Component },
    { path: 'cityPackage1', component: CityPackage1Component },
  { path: 'cityPackage2', component: CityPackage2Component },
  { path: 'cityPackage3', component: CityPackage3Component },
  { path: 'cityPackage4', component: CityPackage4Component },
  
    { path: 'paypal', component: PaypalComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
