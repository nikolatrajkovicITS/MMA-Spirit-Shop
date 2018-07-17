// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AuthenticationModel } from '../../core/authentication/authentication.model';
// import { NanoToken } from '../../core/authentication/nano-token';
// import { LoginService } from './login.service';

// @Component({
//     selector: 'login',
//     templateUrl: './login.component.html',
//     providers: [LoginService]
// })

// export class LoginComponent {

//     public isLoggingIn: boolean = false;
//     public password: string = null;
//     public rememberMe: boolean = false;
//     public username: string = null;

//     constructor(private authenticationModel: AuthenticationModel,
//                 private loginService: LoginService,
//                 private activatedRoute: ActivatedRoute) {
//         if (this.activatedRoute.snapshot.queryParams[NanoToken.NANO_TOKEN]) {
//             this.loginUser(this.activatedRoute.snapshot.queryParams[NanoToken.NANO_TOKEN]);
//         }
//         if (this.activatedRoute.snapshot.queryParams['ssoInit'] === 'true') {
//             this.getSSOUrl();
//         }
//     }

//     public getSSOUrl(): void {
//         this.isLoggingIn = true;
//         this.loginService
//             .getSSOUrl(this.rememberMe)
//             .then(response => window.location.href = response.url)
//             .catch(error => {
//                 console.log(error);
//                 this.isLoggingIn = false;
//             });
//     }

//     public sendLoginRequest(): void {
//         this.isLoggingIn = true;
//         let data = {
//             id: this.username,
//             password: this.password,
//             rememberMe: this.rememberMe
//         };
//         this.loginService
//             .sendLoginRequest(data)
//             .then(response => this.loginUser(response.authenticationToken))
//             .catch(error => {
//                 this.isLoggingIn = false;
//                 console.log(error);
//             });
//     }

//     private loginUser(nanoToken: string): void {
//         this.authenticationModel.setAuthenticationData(nanoToken);
//         this.authenticationModel.goToUserPage();
//     }
// }
