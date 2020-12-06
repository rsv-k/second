import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Exchange } from '@models/exchange.model';
import { pluck } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromAdminModule from '../../store/index';

@Component({
   selector: 'app-exchanges-show',
   templateUrl: './exchanges-show.component.html',
   styleUrls: ['./exchanges-show.component.scss'],
})
export class ExchangesShowComponent implements OnInit {
   exchanges$: Observable<Exchange[]>;
   test = ['1', '2', '3'];
   displayedColumns = [
      'givenCurrency',
      'takenCurrency',
      'course',
      'condition',
      'edit',
      'delete',
   ];

   constructor(
      private store: Store<fromAdminModule.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.store.dispatch(
         ExchangeActions.loadExchangesStart({ payload: { isSorted: false } })
      );

      this.exchanges$ = this.store.select('exchange').pipe(pluck('exchanges'));
   }

   onDeleteExchange(id: string): void {
      this.store.dispatch(ExchangeActions.deleteExchangeStart({ payload: id }));
   }

   onEditExchange(id: string): void {
      this.router.navigate(['admin-dashboard/exchanges-edit', id]);
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
