import { OrdersOptions } from './../models/ordersOptions.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Order } from './../models/order.model';
import { CommonService } from './common.service';

interface Response {
   msg: string;
   order?: any;
   orders?: any[];
}

@Injectable({
   providedIn: 'root',
})
export class OrderService {
   constructor(
      private http: HttpClient,
      private commonService: CommonService
   ) {}

   createOrder(order: Order): Observable<Order> {
      return this.http
         .post<Response>('/api/order', order)
         .pipe(pluck('order'), map(this.commonService.changeId));
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

      return this.http.get<Response>('/api/order', options).pipe(
         pluck('orders'),
         map((orders) => orders.map(this.commonService.changeId))
      );
   }

   getOrder(id: string): Observable<Order> {
      return this.http
         .get<Response>('/api/order/' + id)
         .pipe(pluck('order'), map(this.commonService.changeId));
   }

   getActiveOrder(id: string): Observable<Order> {
      return this.http
         .get<Response>('/api/order/getActiveOrder/' + id)
         .pipe(pluck('order'), map(this.commonService.changeId));
   }

   deleteOrder(ids: string[]): Observable<any> {
      return this.http.post('/api/order/deleteManyById', ids);
   }

   updateOrder(
      ids: string[],
      status: 'canceled' | 'pending' | 'paid' | 'done' | 'freezed'
   ): Observable<any> {
      return this.http.put<Response>('/api/order/updateManyById', {
         ids,
         status,
      });
   }
}
