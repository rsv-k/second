import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Exchange } from '../models/exchange.model';

const ENDPOINT_URL = '/api/exchange/';

@Injectable({
   providedIn: 'root',
})
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

   getExchanges(): Observable<Exchange[]> {
      return this.http
         .get<{ msg: string; exchanges: any[] }>(ENDPOINT_URL)
         .pipe(
            pluck('exchanges'),
            map((exchanges) => {
               return exchanges.map((ex) => {
                  ex.id = ex._id;
                  delete ex._id;

                  ex.givenCurrency.id = ex.givenCurrency._id;
                  delete ex.givenCurrency._id;
                  ex.takenCurrency.id = ex.takenCurrency._id;
                  delete ex.takenCurrency._id;

                  return ex;
               });
            })
         );
   }

   deleteExchange(id: string): Observable<Exchange> {
      return this.http
         .delete<{ msg: string; exchange: any }>(ENDPOINT_URL + id)
         .pipe(
            map((response) => {
               const exchange = response.exchange;
               exchange.id = exchange._id;
               delete exchange._id;
               return exchange;
            })
         );
   }

   getExchange(id: string): Observable<Exchange> {
      return this.http
         .get<{ msg: string; exchange: any }>(ENDPOINT_URL + id)
         .pipe(
            map((response) => {
               const exchange = response.exchange;
               exchange.id = exchange._id;
               delete exchange._id;
               return exchange;
            })
         );
   }

   updateExchange(id: string, exchange: any): Observable<Exchange> {
      return this.http
         .put<{ msg: string; exchange: any }>(ENDPOINT_URL + id, exchange)
         .pipe(
            map((response) => {
               const ex = response.exchange;
               ex.id = ex._id;
               delete ex._id;
               return ex;
            })
         );
   }
}
