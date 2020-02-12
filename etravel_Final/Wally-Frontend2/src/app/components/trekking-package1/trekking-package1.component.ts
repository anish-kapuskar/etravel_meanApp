import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-trekking-package1',
  templateUrl: './trekking-package1.component.html',
  styleUrls: ['./trekking-package1.component.css']
})
export class TrekkingPackage1Component implements OnInit {
  creds:string = JSON.parse(localStorage.getItem('user'));
  loggedInStatus :boolean = false;
  constructor(public router: Router,private authservice: AuthService) {
    if(this.creds){
      this.loggedInStatus = true;
    }

  }


 calc(){
 let x = (<HTMLInputElement>document.getElementById("num")).value;

 var y=+x;
 var departure = (<HTMLInputElement>document.getElementById("departure")).value;
 console.log(departure);




 var sel = (<HTMLSelectElement>document.getElementById("sel"));
var select = sel.options[sel.selectedIndex].text;

 this.router.navigateByUrl('/cart', { state: {name:'Trekking Package1',  price:1000*y, departure: departure, select:select, image:'/assets/images/trekkingPackage1.jpg'} });
 }


  navigateWithState() {

  }

  ngOnInit() {
  }



}
