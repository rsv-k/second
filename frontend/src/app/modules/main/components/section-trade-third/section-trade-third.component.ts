import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Order } from '@models/order.model';
import * as fromRoot from '../../../../store/index';

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
      this.order$ = this.store.select('order').pipe(
         pluck('order'),
         tap((data) => {
            this.setTimer(new Date(data.date).getTime() + 15 * 60 * 1000);
         })
      );
   }

   private setTimer(dueTime: number): void {
      this.timer = setTimeout(() => {
         this.timeLeft = dueTime - Date.now();
         this.setTimer(dueTime);
      }, 1000);
   }
}
