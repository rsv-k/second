import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Exchange } from '../models/exchange.model';

const ENDPOINT_URL = '/api/exchange/';

interface Response {
   msg: string;
   exchange?: any;
   exchanges?: any[];
}

@Injectable({
   providedIn: 'root',
})
export class ExchangeService {
   constructor(
      private http: HttpClient,
      private commonService: CommonService
   ) {}

   createExchange(exchange: Exchange): Observable<Exchange> {
      return this.http.post<Response>(ENDPOINT_URL, exchange).pipe(
         pluck('exchange'),
         map(this.commonService.changeId),
         map((ex) => {
            ex.givenCurrency.id = ex.givenCurrency._id;
            delete ex.givenCurrency._id;
            ex.takenCurrency.id = ex.takenCurrency._id;
            delete ex.takenCurrency._id;

            return ex;
         })
      );
   }

   getExchanges(): Observable<Exchange[]> {
      return this.http.get<Response>(ENDPOINT_URL).pipe(
         pluck('exchanges'),
         map((exchanges) => exchanges.map(this.commonService.changeId)),
         map((exchanges) => {
            return exchanges.map((ex) => {
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
         .delete<Response>(ENDPOINT_URL + id)
         .pipe(pluck('exchange'), map(this.commonService.changeId));
   }

   getExchange(id: string): Observable<Exchange> {
      return this.http
         .get<Response>(ENDPOINT_URL + id)
         .pipe(pluck('exchange'), map(this.commonService.changeId));
   }

   updateExchange(id: string, exchange: any): Observable<Exchange> {
      return this.http
         .put<Response>(ENDPOINT_URL + id, exchange)
         .pipe(pluck('exchange'), map(this.commonService.changeId));
   }
}
