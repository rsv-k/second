import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import { Currency } from './../../../core/models/currency.model';
import { Observable } from 'rxjs';
import { CommonService } from '@core/services/common.service';

const ENDPOINT_URL = 'currency/';

interface Response {
   msg: string;
   currency?: any;
   currencies?: any[];
}

@Injectable()
export class CurrencyService {
   constructor(
      private http: HttpClient,
      private commonService: CommonService
   ) {}

   getCurrencies(): Observable<Currency[]> {
      return this.http.get<Response>('/api/' + ENDPOINT_URL).pipe(
         pluck('currencies'),
         map((currencies) => currencies.map(this.commonService.changeId))
      );
   }

   getCurrency(id: string): Observable<Currency> {
      return this.http
         .get<Response>('/api/currency/' + id)
         .pipe(pluck('currency'), map(this.commonService.changeId));
   }

   createCurrency(currency: Currency): Observable<Currency> {
      const data = {
         ...currency,
      };
      delete data.icon;
      const formData = new FormData();
      formData.append('icon', currency.icon);
      formData.append('data', JSON.stringify(data));

      return this.http
         .post<Response>('/api/' + ENDPOINT_URL, formData)
         .pipe(pluck('currency'), map(this.commonService.changeId));
   }

   deleteCurrency(id: string): Observable<Currency> {
      return this.http
         .delete<Response>('/api/' + ENDPOINT_URL + id)
         .pipe(pluck('currency'), map(this.commonService.changeId));
   }

   updateCurrency(id: string, currency: any): Observable<Currency> {
      const data = {
         ...currency,
      };
      delete data.icon;
      const formData = new FormData();
      formData.append('icon', currency.icon);
      formData.append('data', JSON.stringify(data));

      return this.http
         .put<Response>('/api/' + ENDPOINT_URL + id, formData)
         .pipe(pluck('currency'), map(this.commonService.changeId));
   }
}
