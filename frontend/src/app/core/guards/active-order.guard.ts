import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { OrderService } from '@core/services/order.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class ActiveOrderGuard implements CanActivate {
   constructor(private orderService: OrderService, private router: Router) {}

   canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
      return this.orderService.isActiveOrder(next.params.id).pipe(
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
