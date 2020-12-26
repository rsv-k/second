import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'app-admin-side-menu',
   templateUrl: './admin-side-menu.component.html',
   styleUrls: ['./admin-side-menu.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSideMenuComponent {
   links = [
      {
         linkTo: './orders-show',
         icon: 'loop',
         text: 'Заявки на обмен',
         queryParams: {
            page: 1,
            limit: 10,
         },
      },
      {
         linkTo: './exchanges-show',
         icon: 'shuffle',
         text: 'Направления обмена',
      },
      {
         linkTo: './currencies-show',
         icon: 'credit_card',
         text: 'Валюты',
      },
      {
         linkTo: './validators-show',
         icon: 'check',
         text: 'Валидаторы',
      },
      {
         linkTo: './merchants-show',
         icon: 'link',
         text: 'Мерчанты',
      },
   ];
}
