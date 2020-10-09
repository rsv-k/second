import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Order } from './../models/order.model';

@Injectable({
   providedIn: 'root',
})
export class OrderService {
   constructor(private http: HttpClient) {}

   createOrder(order: Order): Observable<Order> {
      return this.http
         .post<{ msg: string; order: any }>('/api/order', order)
         .pipe(
            pluck('order'),
            map((order) => {
               order.id = order._id;
               delete order._id;
               return order;
            })
         );
   }

   getOrders(page: number): Observable<Order[]> {
      let params = '';
      if (page) {
         params = '?page=' + page;
      }

      return this.http.get<{ msg: string; orders: any[] }>('/api/order' + params).pipe(
         pluck('orders'),
         map((orders) =>
            orders.map((order) => {
               order.id = order._id;
               delete order._id;
               return order;
            })
         )
      );
   }
}
