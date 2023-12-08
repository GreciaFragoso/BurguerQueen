import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { api_url, order_route, products_route, users_route } from '../constants/constants'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  login(loginData: object): Observable<any> {
    // const url = new URL(api_url, users_route);
    const url = `${api_url}${users_route}`;
    console.log(url);
    return this.http.post(url, loginData);
  }
  
  getUsers(): Observable<any> {
    // const url = new URL(api_url, users_route);
    const url = `${api_url}${users_route}`;
    console.log(url);
    return this.http.get(url);
  }

  register(user: any): Observable<any> {
    const url = `${api_url}${users_route}`;
    console.log(url);
    return this.http.post(url, user)
  } 
}
