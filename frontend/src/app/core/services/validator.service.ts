import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Validator } from './../models/validator.model';

const ENDPOINT_URL = '/api/validator/';

interface Response {
   msg: string;
   validator?: any;
   validators?: any[];
}

@Injectable({
   providedIn: 'root',
})
export class ValidatorService {
   constructor(private http: HttpClient) {}

   createValidator(validator: Validator): Observable<Validator> {
      return this.http.post<Response>(ENDPOINT_URL, validator).pipe(
         pluck('validator'),
         map((v) => {
            v.id = v._id;
            delete v._id;
            return v;
         })
      );
   }

   getValidators(): Observable<Validator[]> {
      return this.http.get<Response>(ENDPOINT_URL).pipe(
         pluck('validators'),
         map((validators) =>
            validators.map((v) => {
               v.id = v._id;
               delete v._id;
               return v;
            })
         )
      );
   }

   deleteValidator(id: string): Observable<Validator> {
      return this.http.delete<Response>(ENDPOINT_URL + id).pipe(
         pluck('validator'),
         map((v) => {
            v.id = v._id;
            delete v._id;
            return v;
         })
      );
   }
}
