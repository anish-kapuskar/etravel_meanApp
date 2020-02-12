import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	LoginService
} from '../service/login.service';
import {
	AuthService
} from '../service/auth.service';
import {
	ToastrService
} from 'ngx-toastr';
import {
	ToastrModule
} from 'ngx-toastr';

import { AuthService as SocialLogin } from "angularx-social-login";

import { GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private toastr: ToastrService, private loginService: LoginService, private router: Router, private socialLoginService: SocialLogin, private authService: AuthService) {}



	signInWithGoogle() {
		this.socialLoginService.signIn(GoogleLoginProvider.PROVIDER_ID)
		.then(response => {
			console.log(response);
			// mongo db
			this.router.navigate(['/']);
		}).catch(error => {
			console.log(error);
		})
	  }
	 
	  signInWithFB() {
		this.socialLoginService.signIn(FacebookLoginProvider.PROVIDER_ID)
		.then(response => {
			console.log(response);
			// mongo db
			this.router.navigate(['/']);
		}).catch(error => {
			console.log(error);
		})
	  } 

	ngOnInit() {
	
	}

	findUser(val: any) {
		const user = {
			userName: val.userName,
			password: val.password
		}
		this.authService.authenticateUser(user).subscribe((data: any) => {
			var temp = {};
			if (data.success) {
				this.authService.storeUserData(data.token, data.user);
				this.showToaster(true, "Hello, Welcome "+data.user.firstName);
				this.router.navigate(['products-list']);
			} else {
				this.showToaster(false, 'Wrong credentials or you are not registered!');
				this.router.navigate(['login']);
				console.log(data);
			}
		});
		
	}
	showToaster(val, msg) {
		if (val == true) {
			this.toastr.success(msg || "Error");
		} else {
			this.toastr.warning(msg || "Success")
		}
	}
}

