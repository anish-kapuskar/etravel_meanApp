// import { LoginComponent } from './components/loginpage/loginpage.component';

/*Angular Material*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import {MatInputModule, MatSortModule, MatTableModule, MatIconModule, MatFormFieldModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { BudgetComponent } from './components/budget/budget.component';
import { SubheaderComponent } from '../app/components/subheader/subheader.component';
import { AddBankAccountComponent } from './components/addbankaccount/addbankaccount.component';

import {ProductsListComponent} from './components/products-list/products-list.component';


import { TrekkingComponent } from './components/trekking/trekking.component';
import { BeachesComponent } from './components/beaches/beaches.component';
import { SkydivingComponent } from './components/skydiving/skydiving.component';
import { CitiesComponent } from './components/cities/cities.component';
import { TrekkingPackage1Component } from './components/trekking-package1/trekking-package1.component';
import { SkydivingPackage1Component } from './components/skydiving-package1/skydiving-package1.component';
import { CartComponent } from './components/cart/cart.component';

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

import {
  MatButtonModule,
  MatCardModule } from '@angular/material';
import { GoogleLoginProvider,FacebookLoginProvider, AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';


let config = new AuthServiceConfig([
   {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("198904238854-i8rf4cs5u4u5p1kf9trd2dol8o3fjo9r.apps.googleusercontent.com")
    },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2402860989973705")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent, 
    LoginComponent,
    SignuppageComponent,
    ContactComponent,
    FooterComponent,
    HowitworksComponent,
    SignuppageComponent,
    BlogComponent,
    AboutusComponent,
    DashboardComponent,
    PiechartComponent,
    BudgetComponent,
    SubheaderComponent,
    AddBankAccountComponent,
    
    ProductsListComponent,
    
       TrekkingComponent,
    BeachesComponent,
    SkydivingComponent,
    CitiesComponent,
    TrekkingPackage1Component,
    SkydivingPackage1Component,

    CartComponent,
    
     TrekkingPackage2Component,
      TrekkingPackage3Component,
       TrekkingPackage4Component,
SkydivingPackage2Component,
SkydivingPackage3Component,
SkydivingPackage4Component,
BeachPackage1Component,

BeachPackage2Component,
BeachPackage3Component,
BeachPackage4Component,
CityPackage1Component,
CityPackage2Component,
CityPackage3Component,
CityPackage4Component,
PaypalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatAutocompleteModule,
      SocialLoginModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
