import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Order } from './../models/order.model';
import { CommonService } from './common.service';

const END_POINT = '/api/v1/orders/';

interface Response {
   status: boolean;
   data: any | any[];
   pagination?: {
      prev: boolean;
      next: boolean;
   };
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
         .pipe(pluck('data'), map(this.commonService.changeId));
   }

   getOrders(
      opt
   ): Observable<{ orders: Order[]; next: boolean; prev: boolean }> {
      const options = {
         params: new HttpParams(),
      };
      for (const key in opt) {
         if (key in opt) {
            options.params = options.params.set(key, opt[key]);
         }
      }
      return this.http.get<Response>(END_POINT, options).pipe(
         map((payload) => {
            const orders = payload.data.map(this.commonService.changeId);
            return {
               orders,
               prev: payload.pagination.prev,
               next: payload.pagination.next,
            };
         })
      );
   }

   getOrder(id: string): Observable<Order> {
      return this.http
         .get<Response>(END_POINT + id)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }

   isActiveOrder(id: string): Observable<boolean> {
      return this.http
         .get<Response>(END_POINT + 'isActiveOrder/' + id)
         .pipe(pluck('data'));
   }

   deleteOrder(ids: string[]): Observable<string[]> {
      return this.http
         .post<Response>(END_POINT + 'deleteManyById', ids)
         .pipe(pluck('data'));
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
            pluck('data'),
            map((orders) => orders.map(this.commonService.changeId))
         );
   }
}
