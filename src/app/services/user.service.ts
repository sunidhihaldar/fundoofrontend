import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../model/register-user';
import { LoginUser } from '../model/login-user';
import { HttpHandlerService } from './http-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };
  emailurl='';
  public registration(user : RegisterUser) {
    console.log('In registration service');
    return this.httpService.post(`${environment.userApiUrl + environment.registerUrl}`, user, this.httpOptions);
  }

  public login(user : LoginUser) {
    console.log('In login service');
    return this.httpService.post(`${environment.userApiUrl + environment.loginUrl}`, user, this.httpOptions);
  }

  verifyUser(user: any, token: string): Observable<any> {
    console.log('In activateUser service' + `${environment.userVerifyUrl}/${token}`);
    return this.httpService.put(`${environment.userApiUrl}/${environment.userVerifyUrl}/${token}`, user, {responseType: 'text'});
  }

  public sendEmail(email: any): Observable<any> {
    console.log("send email service",email);
    console.log('Inside service forgot password');
    return this.httpService.post(`${environment.userApiUrl + environment.forgotPasswordUrl}`, email, this.httpOptions);
  }

  public passwordUpdate(user: any, token: string): Observable<any> {
    console.log('Inside password update ');
    return this.httpService.put(`${environment.userApiUrl}/${environment.updatePasswordUrl}/${token}`, user, {responseType: 'text'});
  }
  
}