import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities-package1',
  templateUrl: './cities-package1.component.html',
  styleUrls: ['./cities-package1.component.css']
})
export class CitiesPackage1Component implements OnInit {

  constructor(public router: Router) { }

 
  
    cart(){
  this.router.navigateByUrl('/cart', { state: {name:'Cities Package1', id:11, details:'Details of Cities Package 1', price:'2000$'} });
  }
  
  
  navigateWithState() {

  }
  
   ngOnInit() {
  }

}

