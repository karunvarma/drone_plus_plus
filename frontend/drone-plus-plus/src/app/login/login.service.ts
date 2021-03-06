import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = 'http://192.168.99.103:30002/';
  constructor(private http: HttpClient) { }
  loginNewUser(userData) {
    return this.http.post(`${this.apiURL}login/`, userData);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('user-token') != null) {
        //  TODO: call API to validate the token and cache it for later requests
        return true;
    }
    return false;
  }

  getUserInfo() {
    // TODO: call API to get user name and cache it for later requests
    return this.http.get(this.apiURL + 'user_details/');
  }

  logout() {
    localStorage.removeItem('user-token');
  }


}
