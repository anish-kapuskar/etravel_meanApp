import { Component, OnInit } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import {Routes, RouterModule} from '@angular/router';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

import * as jsPDF from 'jspdf'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  creds:string = JSON.parse(localStorage.getItem('user'));
  loggedInStatus :boolean = false;

state$: Observable<object>;
name$:Observable<object>;
price$:Observable<object>;
departure$:Observable<object>;
select$:Observable<object>;
image$:Observable<object>;

downloadPdf(){

const doc = new jsPDF();

var name = JSON.stringify(window.history.state.name);
var price = JSON.stringify(window.history.state.price);
var departure = JSON.stringify(window.history.state.departure);
var select = JSON.stringify(window.history.state.select);
var image = JSON.stringify(window.history.state.image);

doc.text('Package Details',40,10);

doc.text('Package Name :',10,40);
doc.text(name,60,40);

doc.text('Package Price :',10,70);
doc.text(price,60,70);

doc.text('Departure Date :',10,100);
doc.text(departure,60,100);

doc.text('Package Period :',10,130);
doc.text(select,60,130);

doc.save('brouchre.pdf');

}


  constructor(public activatedRoute: ActivatedRoute,private authservice: AuthService, private router: Router) { 
    if(this.creds){
      this.loggedInStatus = true;
    }
 console.log(history.state.name);
  }

  ngOnInit() {
  
      this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
      
      
    this.name$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.name));
      
          this.price$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.price));
      
              this.departure$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.departure));
      
              this.select$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.select));
      
       this.image$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.image));
      
  }
  
  /*  send(){
  
  let transporter = nodemailer.createTransport({
  service:'gmail', auth:{
  user:'wdprojectfinal@gmail.com', pass:'webdesign2019'
  },
  });
  
  const mailOptions={
  from:'wdprojectfinal@gmail.com',
  to:'wdprojectfinal@gmail.com',
  subject:'Hello',
  html:` <span>  <div class="card-body">
          <h5 class="card-title" style="text-align: center">Product Info</h5>
          <p class="card-text"></p>
            <div style="float: left">
            <p>Package : {{ name$ | async }}</p>
            
            <p>Price : {{ price$ | async }}</p>
            
            <p>Departure :{{ departure$ | async }}</p>
            <p>Period :{{ select$ | async }} </p><br>
                   <a style="" class="btn btn-primary" (click)="downloadPdf()">Download as PDF</a>
                </div>
            <img style="float: right" width="50%" height="auto" src="{{ image$ | async }}">
        
       
        </div><span>`
  }; 
  
  transporter.sendMail(mailOptions,(error,info)=>{
  if(error){
  return reject(error);
  }
  return resolve({message:'Invoice sent'});
  
  
  })
  
  
  }  
  */

}
