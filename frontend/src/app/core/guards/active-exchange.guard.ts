import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ExchangeService } from '@core/services/exchange.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class ActiveExchangeGuard implements CanActivate {
   constructor(
      private exchangeService: ExchangeService,
      private router: Router
   ) {}

   canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
      return this.exchangeService.isActiveExchange(next.params.id).pipe(
         tap((result) => {
            if (!result) {
               this.router.navigate(['/exchanges']);
            }
         }),
         catchError((error) => {
            this.router.navigate(['/exchanges']);
            return of(false);
         })
      );
   }
}
