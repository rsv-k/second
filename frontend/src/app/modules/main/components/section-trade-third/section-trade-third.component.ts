import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Order } from '@models/order.model';
import * as fromRoot from '../../../../store/index';

@Component({
   selector: 'app-section-trade-third',
   templateUrl: './section-trade-third.component.html',
   styleUrls: ['./section-trade-third.component.scss'],
})
export class SectionTradeThirdComponent implements OnInit {
   order$: Observable<Order>;

   constructor(private store: Store<fromRoot.AppState>) {}

   ngOnInit(): void {
      this.order$ = this.store.select('order').pipe(pluck('order'));
   }
}
