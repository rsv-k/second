import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Validator } from './../models/validator.model';

const ENDPOINT_URL = '/api/validator/';

@Injectable({
   providedIn: 'root',
})
export class ValidatorService {
   constructor(private http: HttpClient) {}

   createValidator(validator: Validator): Observable<Validator> {
      return this.http
         .post<{ msg: string; validator: any }>(ENDPOINT_URL, validator)
         .pipe(
            pluck('validator'),
            map((v) => {
               v.id = v._id;
               delete v._id;
               return v;
            })
         );
   }
}
