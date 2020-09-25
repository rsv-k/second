import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Exchange } from './../../../core/models/exchange.model';

const ENDPOINT_URL = '/api/exchange/';

@Injectable()
export class ExchangeService {
   constructor(private http: HttpClient) {}

   createExchange(exchange: Exchange): Observable<Exchange> {
      return this.http
         .post<{ msg: string; exchange: any }>(ENDPOINT_URL, exchange)
         .pipe(
            pluck('exchange'),
            map((ex) => {
               ex.id = ex._id;
               delete ex._id;

               ex.givenCurrency.id = ex.givenCurrency._id;
               delete ex.givenCurrency._id;
               ex.takenCurrency.id = ex.takenCurrency._id;
               delete ex.takenCurrency._id;

               return ex;
            })
         );
   }
}
