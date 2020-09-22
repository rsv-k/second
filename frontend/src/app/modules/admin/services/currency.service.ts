import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root',
})
export class CurrencyService {
   constructor(private http: HttpClient) {}

   getCurrencies() {
      return this.http.get('https://api.github.com/userss');
   }
}
