import { Currency } from './../../../core/models/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ENDPOINT_URL = 'currency';

@Injectable({
   providedIn: 'root',
})
export class CurrencyService {
   constructor(private http: HttpClient) {}

   getCurrencies() {
      return this.http.get('https://api.github.com/users');
   }

   createCurrency(currency: Currency) {
      return this.http.post('/api/' + ENDPOINT_URL, currency);
   }
}
