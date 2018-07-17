// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import { CONFIGURATION } from '../../configuration/configuration';
// import { ErrorHandler } from '../core/error-handler';
// import { DataPartnersRegister } from './data-partner-register/data-partner-register';

// @Injectable()
// export class DataPartnersRegisterService {

//     private registerUrl = CONFIGURATION.nanoApiUrl + '/data-partners';
//     private headers = new Headers({'Content-Type': 'application/json'});

//     constructor(private http: Http,
//                 private errorHandler: ErrorHandler) {
//     }

//     dataPartnerVerify(token: string) {
//         return this.http
//             .get(this.registerUrl + '/verify/' + token, {headers: this.headers})
//             .toPromise()
//             .then(response => response.json());
//     }

//     sendRegisterRequest(dataPartnersRegister: DataPartnersRegister): Promise<any> {
//         return this.http.post(this.registerUrl + '/create', JSON.stringify(dataPartnersRegister), {headers: this.headers})
//             .toPromise()
//             .then(response => response.json())
//             .catch(error => this.errorHandler.handleError('Error registering data partner', error));
//     }

// }
