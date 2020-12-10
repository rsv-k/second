import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Merchant } from '../../../core/models/merchant.model';
import { CommonService } from '../../../core/services/common.service';

const ENDPOINT_URL = '/api/merchant/';

interface Response {
   msg: string;
   merchant?: any;
   merchants?: any[];
}

@Injectable()
export class MerchantService {
   constructor(
      private http: HttpClient,
      private commonService: CommonService
   ) {}

   createMerchant(merchant: Merchant): Observable<Merchant> {
      return this.http
         .post<Response>(ENDPOINT_URL, merchant)
         .pipe(pluck('merchant'), map(this.commonService.changeId));
   }

   getMerchants(): Observable<Merchant[]> {
      return this.http.get<Response>(ENDPOINT_URL).pipe(
         pluck('merchants'),
         map((merchants) => merchants.map(this.commonService.changeId))
      );
   }

   deleteMerchant(id: string): Observable<Merchant> {
      return this.http
         .delete<Response>(ENDPOINT_URL + id)
         .pipe(pluck('merchant'), map(this.commonService.changeId));
   }

   editMerchant(id: string, merchant: Merchant): Observable<Update<Merchant>> {
      return this.http
         .put<Response>(ENDPOINT_URL + id, merchant)
         .pipe(pluck('merchant'), map(this.commonService.changeId));
   }
}
