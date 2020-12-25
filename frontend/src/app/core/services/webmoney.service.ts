import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Order } from '../models/order.model';

@Injectable({
   providedIn: 'root',
})
export class WebmoneyService {
   constructor(private http: HttpClient) {}

   check(order: Order): Observable<boolean> {
      return this.http
         .post<{ result: boolean }>('/api/v1/serviceValidators/webmoney', order)
         .pipe(pluck('result'));
   }
}
