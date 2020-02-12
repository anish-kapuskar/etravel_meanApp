import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skydiving-package4',
  templateUrl: './skydiving-package4.component.html',
  styleUrls: ['./skydiving-package4.component.scss']
})
export class SkydivingPackage4Component implements OnInit {

  constructor(public router: Router) { }
 calc(){
 let x = (<HTMLInputElement>document.getElementById("num")).value;
 
 var y=+x;
 var departure = (<HTMLInputElement>document.getElementById("departure")).value;
 console.log(departure); 
  


 
 var sel = (<HTMLSelectElement>document.getElementById("sel"));
var select = sel.options[sel.selectedIndex].text;
 
 this.router.navigateByUrl('/cart', { state: {name:'Skydiving Package4',  price:1000*y, departure: departure, select:select, image:'/assets/images/Germany.jpg'} });
 } 
 
  ngOnInit() {
  }

}
