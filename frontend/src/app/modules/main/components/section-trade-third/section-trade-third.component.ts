import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Order } from '@models/order.model';
import * as fromRoot from '../../../../store/index';
import * as ProgressActions from '../../../../store/actions/progress.actions';

@Component({
   selector: 'app-section-trade-third',
   templateUrl: './section-trade-third.component.html',
   styleUrls: ['./section-trade-third.component.scss'],
})
export class SectionTradeThirdComponent implements OnInit {
   order$: Observable<Order>;
   timeLeft: number;
   private timer: any;

   constructor(private store: Store<fromRoot.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(ProgressActions.setCurrentProcess({ payload: 3 }));
      this.order$ = this.store.select('order').pipe(
         pluck('order'),
         tap((data) => {
            const dueTime = new Date(data.date).getTime() + 15 * 60 * 1000;

            if (!this.timer) {
               this.timeLeft = dueTime - Date.now();
               this.setTimer(dueTime);
            }
         })
      );
   }

   private setTimer(dueTime: number): void {
      this.timer = setTimeout(() => {
         this.timeLeft = dueTime - Date.now();
         console.log(dueTime - Date.now());

         if (this.timeLeft <= 0) {
            clearTimeout(this.timer);
         }

         this.setTimer(dueTime);
      }, 1000);
   }
}
