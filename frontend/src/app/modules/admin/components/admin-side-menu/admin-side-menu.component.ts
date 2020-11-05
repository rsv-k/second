import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-admin-side-menu',
   templateUrl: './admin-side-menu.component.html',
   styleUrls: ['./admin-side-menu.component.scss'],
})
export class AdminSideMenuComponent implements OnInit {
   links = [
      {
         linkTo: './orders-show',
         icon: 'loop',
         text: 'Заявки на обмен',
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
   ];

   constructor() {}

   ngOnInit(): void {}
}
