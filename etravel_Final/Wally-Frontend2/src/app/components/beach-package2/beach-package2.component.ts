import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-beach-package2',
  templateUrl: './beach-package2.component.html',
  styleUrls: ['./beach-package2.component.scss']
})
export class BeachPackage2Component implements OnInit {

  constructor(public router: Router) { }
 calc(){
 let x = (<HTMLInputElement>document.getElementById("num")).value;

 var y=+x;
 var departure = (<HTMLInputElement>document.getElementById("departure")).value;
 console.log(departure);




 var sel = (<HTMLSelectElement>document.getElementById("sel"));
var select = sel.options[sel.selectedIndex].text;

 this.router.navigateByUrl('/cart', { state: {name:'Beach Package2',  price:1000*y, departure: departure, select:select, image:'/assets/images/beachPackagea1.jpg'} });
 }

  ngOnInit() {
  }

}
