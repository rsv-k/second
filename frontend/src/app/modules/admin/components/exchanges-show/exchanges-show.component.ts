import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Exchange } from '@models/exchange.model';
import * as fromAdminModule from '../../store/index';
import * as fromRoot from '../../../../store/index';

@Component({
   selector: 'app-exchanges-show',
   templateUrl: './exchanges-show.component.html',
   styleUrls: ['./exchanges-show.component.scss'],
})
export class ExchangesShowComponent implements OnInit {
   exchanges$: Observable<Exchange[]>;
   displayedColumns = [
      'givenCurrency',
      'takenCurrency',
      'course',
      'condition',
      'edit',
      'delete',
   ];

   constructor(private store: Store<fromAdminModule.AppState>) {}

   ngOnInit(): void {
      this.exchanges$ = this.store.select(fromRoot.getAllExchanges);
   }

   onDeleteExchange(id: string): void {
      this.store.dispatch(ExchangeActions.deleteExchangeStart({ payload: id }));
   }

   onToggleAction(id: string, condition: boolean): void {
      const body = {
         isActive: !condition,
      };

      this.store.dispatch(
         ExchangeActions.editExchangeStart({ payload: { id, exchange: body } })
      );
   }
}
