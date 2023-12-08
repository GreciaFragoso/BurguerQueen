import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { api_url, users_route, login_route } from '@data/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { };

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };
    const url = `${api_url}${login_route}`;
    
    return this.http.post(url, loginData).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  logout() {
    this.loggedIn.next(false);
  }
}
