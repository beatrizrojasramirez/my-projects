import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {
  }

  getOrders() { 
    /** The header is used to send more information to the service, in this case, that there's an authorization */
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization','Bearer ' + token);

    return this.http.get('/api/orders',{headers:headers, observe:"response"});
  }
}