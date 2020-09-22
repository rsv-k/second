import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import * as fromApp from '../../../../store/index';
import { map, pluck } from 'rxjs/operators';

@Component({
   selector: 'app-admin-page-header',
   templateUrl: './admin-page-header.component.html',
   styleUrls: ['./admin-page-header.component.scss'],
})
export class AdminPageHeaderComponent implements OnInit {
   @Input() title: string;
   @Input() linkTo: string;
   currenciesAmount$: Observable<number>;

   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.currenciesAmount$ = this.store.select('currency').pipe(
         pluck('currenciesAmount'),
         map((num) => {
            return num > 0 && this.title === 'Валюты' ? num : null;
         })
      );
   }
}
