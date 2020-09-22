import { map } from 'rxjs/operators';
import { Currency } from './../../../core/models/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ENDPOINT_URL = 'currency/';

@Injectable({
   providedIn: 'root',
})
export class CurrencyService {
   constructor(private http: HttpClient) {}

   getCurrencies(): Observable<Currency[]> {
      return this.http
         .get<{ msg: string; currencies: any[] }>('/api/' + ENDPOINT_URL)
         .pipe(
            map((response) => {
               return response.currencies.map((c) => {
                  c.id = c._id;
                  delete c._id;
                  return c;
               });
            })
         );
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
         .post<{ msg: string; currency: any }>('/api/' + ENDPOINT_URL, formData)
         .pipe(
            map((response) => {
               const currency = response.currency;
               currency.id = currency._id;
               delete currency._id;

               return currency;
            })
         );
   }

   deleteCurrency(id: string): Observable<Currency> {
      return this.http
         .delete<{ msg: string; currency: any }>('/api/' + ENDPOINT_URL + id)
         .pipe(
            map((response) => {
               const currency = response.currency;
               currency.id = currency._id;
               delete currency._id;

               return currency;
            })
         );
   }
}
