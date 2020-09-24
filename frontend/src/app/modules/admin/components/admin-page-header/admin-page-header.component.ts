import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import * as fromApp from '../../../../store/index';
import { filter, map, pluck } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
   selector: 'app-admin-page-header',
   templateUrl: './admin-page-header.component.html',
   styleUrls: ['./admin-page-header.component.scss'],
})
export class AdminPageHeaderComponent implements OnInit {
   @Input() title: string;
   @Input() linkTo: string;
   currenciesAmount$: Observable<number>;

   private pagesData = {
      'exchanges-show': {
         title: 'Направления обмена',
         linkTo: 'exchanges-create',
      },
      'currencies-show': {
         title: 'Валюты',
         linkTo: 'currencies-create',
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
      private store: Store<fromApp.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.updatePageData();

      this.router.events
         .pipe(filter((e) => e instanceof NavigationEnd))
         .subscribe(() => {
            this.updatePageData();
         });

      this.currenciesAmount$ = this.store.select('admin').pipe(
         pluck('currenciesAmount'),
         map((num) => {
            return num > 0 && this.title === 'Валюты' ? num : null;
         })
      );
   }

   private updatePageData(): void {
      const arr = this.router.url.split('/');
      const page = arr.length === 4 ? arr[2] : arr.pop();

      this.title = this.pagesData[page].title;
      this.linkTo = this.pagesData[page].linkTo;
   }
}
