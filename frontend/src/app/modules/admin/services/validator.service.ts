import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Validator } from '../../../core/models/validator.model';
import { CommonService } from '../../../core/services/common.service';

const ENDPOINT_URL = '/api/v1/validators/';

interface Response {
   status: boolean;
   data: any | any[];
}

@Injectable()
export class ValidatorService {
   constructor(
      private http: HttpClient,
      private commonService: CommonService
   ) {}

   createValidator(validator: Validator): Observable<Validator> {
      return this.http
         .post<Response>(ENDPOINT_URL, validator)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }

   getValidators(): Observable<Validator[]> {
      return this.http.get<Response>(ENDPOINT_URL).pipe(
         pluck('data'),
         map((validators) => validators.map(this.commonService.changeId))
      );
   }

   deleteValidator(id: string): Observable<Validator> {
      return this.http
         .delete<Response>(ENDPOINT_URL + id)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }

   editValidator(id: string, validator: Validator): Observable<Validator> {
      return this.http
         .put<Response>(ENDPOINT_URL + id, validator)
         .pipe(pluck('data'), map(this.commonService.changeId));
   }
}
