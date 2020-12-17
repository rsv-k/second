import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import { map } from 'rxjs/operators';

@Component({
   selector: 'app-admin-page-header',
   templateUrl: './admin-page-header.component.html',
   styleUrls: ['./admin-page-header.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageHeaderComponent implements OnInit {
   url$: Observable<string>;

   pagesData = {
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
      'exchanges-edit': {
         title: 'Редактировать направление обмена',
      },
      order: {
         title: 'Заявка на обмен',
      },
      'validators-show': {
         title: 'Валидаторы',
      },
      'merchants-show': {
         title: 'Мерчанты',
      },
   };
   constructor(private store: Store<fromRoot.AppState>) {}

   ngOnInit(): void {
      this.url$ = this.store
         .select(fromRoot.getCurrentUrl)
         .pipe(map((url) => url.split('/')[2].split('?')[0]));
   }
}
