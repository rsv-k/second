import { OrdersOptions } from './../models/ordersOptions.model';
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
            map((o) => {
               o.id = o._id;
               delete o._id;
               return o;
            })
         );
   }

   getOrders(opt: OrdersOptions): Observable<Order[]> {
      const options = {
         params: new HttpParams(),
      };
      for (const key in opt) {
         if (key in opt) {
            options.params = options.params.set(key, opt[key]);
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

   getOrder(id: string): Observable<Order> {
      return this.http
         .get<{ msg: string; order: any }>('/api/order/' + id)
         .pipe(
            pluck('order'),
            map((order) => {
               order.id = order._id;
               delete order._id;
               return order;
            })
         );
   }

   deleteOrder(ids: string[]): Observable<any> {
      return this.http.post('/api/order/deleteManyById', ids);
   }

   updateOrder(
      ids: string[],
      status: 'canceled' | 'pending' | 'paid' | 'done' | 'freezed'
   ): Observable<any> {
      return this.http.put<{
         msg: 'string';
      }>('/api/order/updateManyById', {
         ids,
         status,
      });
   }
}
