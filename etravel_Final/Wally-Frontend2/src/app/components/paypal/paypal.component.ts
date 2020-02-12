

import { Component, AfterViewChecked } from '@angular/core';

declare let paypal: any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})


export class PaypalComponent implements AfterViewChecked {

  addScript : boolean = false;

  paypalLoad: boolean = true;
  finalAmount : number = 5000;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWc4ZfqIshLK1zu0UEzcqIDgPfmVbGK-SBEyi2jC8ZoK4Xm_nXEjb3t4wIY2SYggIP76p5igdkJJYc_g'
    },
    commit : true,
    payment: (data,actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {amount: { total: this.finalAmount, currency: 'USD'}}
          ]
        }
      });
    },
    onAuthorize: (data,actions) => {
      //do this when payment is successful.
      return actions.payment.execute().then((payment)=> {
      })
    }
  };

  ngAfterViewChecked():void {
    if(!this.addScript) {
      this.addPaypalScript().then(()=> {
        paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn')
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject)=> {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload=resolve;
      document.body.appendChild(scripttagElement);

    })
  }
}

