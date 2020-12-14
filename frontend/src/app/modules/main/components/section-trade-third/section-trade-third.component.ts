import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Order } from '@models/order.model';
import * as fromRoot from '../../../../store/index';
import * as ProgressActions from '../../../../store/actions/progress.actions';
import * as OrderActions from '../../../../store/actions/order.actions';

@Component({
   selector: 'app-section-trade-third',
   templateUrl: './section-trade-third.component.html',
   styleUrls: ['./section-trade-third.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTradeThirdComponent implements OnInit {
   order$: Observable<Order>;
   timeLeft: number;
   isCanceled = false;

   private timer: any;

   constructor(private store: Store<fromRoot.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(ProgressActions.setCurrentProcess({ payload: 3 }));
      this.order$ = this.store.select(fromRoot.getOrder).pipe(
         filter((order) => !!order),
         tap((order) => {
            if (order.status === 'canceled') {
               this.isCanceled = true;
               return;
            }

            const dueTime = new Date(order.date).getTime() + 15 * 60 * 1000;

            if (!this.timer) {
               this.timeLeft = dueTime - Date.now();
               this.setTimer(dueTime);
            }
         })
      );
   }

   onRefuse(): void {
      this.store.dispatch(OrderActions.cancelOrderStart());
   }

   private setTimer(dueTime: number): void {
      this.timer = setTimeout(() => {
         this.timeLeft = dueTime - Date.now();

         if (this.timeLeft <= 0) {
            this.isCanceled = true;
            return clearTimeout(this.timer);
         }

         this.setTimer(dueTime);
      }, 1000);
   }
}
