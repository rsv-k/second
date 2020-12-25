import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import { Currency } from './../../../core/models/currency.model';
import { Observable } from 'rxjs';
import { CommonService } from '@core/services/common.service';

const ENDPOINT_URL = '/api/v1/currencies/';

interface Response {
   status: boolean;
   data: any | any[];
}

@Injectable()
export class CurrencyService {
   constructor(
      private http: HttpClient,
      private commonService: CommonService
   ) {}

   getCurrencies(): Observable<Currency[]> {
      return this.http.get<Response>(ENDPOINT_URL).pipe(
         pluck('data'),
         map((currencies) => currencies.map(this.commonService.changeId))
      );
   }

   getCurrency(id: string): Observable<Currency> {
      return this.http
         .get<Response>(ENDPOINT_URL + id)
         .pipe(pluck('data'), map(this.commonService.changeId));
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
         .post<Response>(ENDPOINT_URL, formData)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }

   deleteCurrency(id: string): Observable<Currency> {
      return this.http
         .delete<Response>(ENDPOINT_URL + id)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }

   updateCurrency(
      id: string,
      body: { [key: string]: string }
   ): Observable<Currency> {
      const data = {
         ...body,
      };
      delete data.icon;
      const formData = new FormData();
      formData.append('icon', body.icon);
      formData.append('data', JSON.stringify(data));

      return this.http
         .put<Response>(ENDPOINT_URL + id, formData)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }
}
