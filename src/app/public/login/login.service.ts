// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import { CONFIGURATION } from '../../../configuration/configuration';
// import { NanoTokenInterface } from '../../core/authentication/nano-token.interface';
// import { ErrorHandler } from '../../core/error-handler';
// import { SSOInterface } from './sso.interface';

// @Injectable()
// export class LoginService {

//     private headers = new Headers({'Content-Type': 'application/json'});
//     private loginUrl = CONFIGURATION.nanoApiUrl + '/login';
//     private ssoUrl = CONFIGURATION.nanoApiUrl + '/sso-url';

//     constructor(private http: Http,
//                 private errorHandler: ErrorHandler) {
//     }

//     public getSSOUrl(rememberMe: boolean): Promise<SSOInterface> {
//         return this.http
//             .get(
//                 this.ssoUrl,
//                 {
//                     params: {rememberMe: rememberMe},
//                     headers: this.headers
//                 }
//             )
//             .toPromise()
//             .then(response => response.json())
//             .catch(error => this.errorHandler.handleErrorAndRejectPromise('Error fetching SSO url: ', error));
//     }

//     public sendLoginRequest(data): Promise<NanoTokenInterface> {
//         return this.http.put(this.loginUrl, JSON.stringify(data), {headers: this.headers})
//             .toPromise()
//             .then(response => response.json())
//             .catch(error => this.errorHandler.handleErrorAndRejectPromise('Error logging in: ', error));
//     }
// }
