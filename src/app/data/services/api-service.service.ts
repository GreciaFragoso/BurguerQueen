import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { api_url, order_route, products_route, users_route } from '../constants/constants'
import { AuthService } from './auth.service';
import { Order } from '@data/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  getHeaders(): HttpHeaders {
    const authToken = this.authService.getUserToken();

    return new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }


  getMenu(): Observable<any> {
    // const url = new URL(api_url, users_route);
    const url = `${api_url}${products_route}`;
     
    const headers = this.getHeaders();
    return this.http.get(url, {headers: headers});
  }

  getOrders(): Observable<Order[]> {
    const url = `${api_url}${order_route}`;
    const headers = this.getHeaders();
    return this.http.get<Order[]>(url, {headers: headers})
  }

}
