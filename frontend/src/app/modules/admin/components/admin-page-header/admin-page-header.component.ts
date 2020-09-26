import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromCurrency from '../../store/reducers/currency.reducer';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
   selector: 'app-admin-page-header',
   templateUrl: './admin-page-header.component.html',
   styleUrls: ['./admin-page-header.component.scss'],
})
export class AdminPageHeaderComponent implements OnInit {
   title: string;
   linkTo: string;
   showAmount: boolean;

   amount$: Observable<number>;

   private pagesData = {
      'exchanges-show': {
         title: 'Направления обмена',
         linkTo: 'exchanges-create',
      },
      'currencies-show': {
         title: 'Валюты',
         linkTo: 'currencies-create',
         showAmount: true,
      },
      'orders-show': {
         title: 'Заявки на обмен',
      },
      'currencies-create': {
         title: 'Добавить валюту',
      },
      'exchanges-create': {
         title: 'Добавить направление обмена',
      },
      'currencies-edit': {
         title: 'Редактировать валюту',
      },
   };
   constructor(
      private store: Store<fromCurrency.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.updatePageData();
      this.initAmount();

      this.router.events
         .pipe(filter((e) => e instanceof NavigationEnd))
         .subscribe(() => {
            this.updatePageData();
            this.initAmount();
         });
   }

   private updatePageData(): void {
      const arr = this.router.url.split('/');
      const page = arr.length === 4 ? arr[2] : arr.pop();

      this.title = this.pagesData[page].title;
      this.linkTo = this.pagesData[page].linkTo;
      this.showAmount = this.pagesData[page].showAmount;
   }

   private initAmount(): void {
      this.amount$ = this.store.pipe(
         select(fromCurrency.selectAdminDocumentsAmount),
         filter(() => this.showAmount)
      );
   }
}
