import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Order } from './../models/order.model';
import { CommonService } from './common.service';

const END_POINT = '/api/v1/orders/';

interface Response {
   msg: string;
   order?: any;
   orders?: any[];
   ids?: string[];
   isActive: boolean;
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
         .post<Response>(END_POINT, order)
         .pipe(pluck('order'), map(this.commonService.changeId));
   }

   getOrders(opt): Observable<Order[]> {
      const options = {
         params: new HttpParams(),
      };
      for (const key in opt) {
         if (key in opt) {
            options.params = options.params.set(key, opt[key]);
         }
      }
      return this.http.get<Response>(END_POINT, options).pipe(
         pluck('orders'),
         map((orders) => orders.map(this.commonService.changeId))
      );
   }

   getOrder(id: string): Observable<Order> {
      return this.http
         .get<Response>(END_POINT + id)
         .pipe(pluck('order'), map(this.commonService.changeId));
   }

   isActiveOrder(id: string): Observable<boolean> {
      return this.http
         .get<Response>(END_POINT + 'isActiveOrder/' + id)
         .pipe(pluck('isActive'));
   }

   deleteOrder(ids: string[]): Observable<string[]> {
      return this.http
         .post<Response>(END_POINT + 'deleteManyById', ids)
         .pipe(pluck('ids'));
   }

   cancelOrder(id: string): Observable<boolean> {
      return this.http
         .get<Response>(END_POINT + 'cancelOrder/' + id)
         .pipe(map(() => true));
   }

   updateOrder(
      ids: string[],
      status: 'canceled' | 'pending' | 'paid' | 'done' | 'freezed'
   ): Observable<Order[]> {
      return this.http
         .put<Response>(END_POINT + 'updateManyById', {
            ids,
            status,
         })
         .pipe(
            pluck('orders'),
            map((orders) => orders.map(this.commonService.changeId))
         );
   }
}
