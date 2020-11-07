import { Component, OnInit } from '@angular/core';
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
      'exchanges-edit': {
         title: 'Редактировать направление обмена',
      },
      order: {
         title: 'Заявка на обмен',
      },
      'validators-show': {
         title: 'Валидаторы',
      },
   };
   constructor(private router: Router) {}

   ngOnInit(): void {
      this.updatePageData();

      this.router.events
         .pipe(filter((e) => e instanceof NavigationEnd))
         .subscribe(() => {
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
