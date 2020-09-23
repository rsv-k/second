import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
   title: string;
   linkTo: string;

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

   constructor(private router: Router) {}

   ngOnInit(): void {
      this.updatePageData();

      this.router.events.subscribe((event: Event) => {
         this.updatePageData();
      });
   }

   private updatePageData(): void {
      const arr = this.router.url.split('/');
      const page = arr.length === 4 ? arr[2] : arr.pop();

      this.title = this.pagesData[page].title;
      this.linkTo = this.pagesData[page].linkTo;
   }
}
