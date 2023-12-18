import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'
import { api_url, order_route, products_route, users_route } from '../constants/constants'
import { AuthService } from './auth.service';
import { Order, ProductInfo } from '@data/interfaces/interfaces';
import { map } from 'rxjs';

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


  getMenu(): Observable<ProductInfo[]> {
    // const url = new URL(api_url, users_route);
    const url = `${api_url}${products_route}`;
     
    const headers = this.getHeaders();
    return this.http.get<ProductInfo[]>(url, {headers: headers});
  }

  getOrderId(): Observable<number>{
    return this.getOrders().pipe(
      map((orders: Order[]) => orders.length + 2)
    )
  }

  getOrders(): Observable<Order[]> {
    const url = `${api_url}${order_route}`;
    const headers = this.getHeaders();
    return this.http.get<Order[]>(url, {headers: headers})
  }

  sendOrder(order: Order){
    const url = `${api_url}${order_route}`;
    const headers = this.getHeaders();
    console.log(order)
    return this.http.post(url, order, {headers: headers})
    .pipe(
      catchError((error: Error) => {
        console.error('Error al enviar la orden', error.message)
        return throwError(error);
      })
    );
  }

}
