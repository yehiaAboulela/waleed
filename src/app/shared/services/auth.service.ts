import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  signup(body: any): Observable<any> {
    return this._HttpClient.post(
      `https://university-manager-beta.onrender.com/auth/signup`,
      body
    );
  }
  login(body: any): Observable<any> {
    return this._HttpClient.post(
      `https://university-manager-beta.onrender.com/auth/signin`,
      body
    );
  }
}
