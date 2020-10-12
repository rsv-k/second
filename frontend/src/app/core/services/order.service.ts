import { HttpClient, HttpParams } from '@angular/common/http';
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

   getOrders(opt: { page?: number }): Observable<Order[]> {
      const options = {
         params: new HttpParams(),
      };
      if (Object.keys(opt).length > 0) {
         for (const key in opt) {
            if (opt[key]) {
               options.params = options.params.set(key, opt[key]);
            }
         }
      }

      return this.http
         .get<{ msg: string; orders: any[] }>('/api/order', options)
         .pipe(
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

   deleteOrder(id: string): Observable<Order> {
      return this.http
         .delete<{ msg: string; order: any }>('/api/order/' + id)
         .pipe(
            pluck('order'),
            map((order) => {
               order.id = order._id;
               delete order._id;
               return order;
            })
         );
   }
}
