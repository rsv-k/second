import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'status',
})
export class StatusPipe implements PipeTransform {
   private statuses = {
      freezed: 'Приостановлена',
      done: 'Выполнена',
      pending: 'Ожидается',
      canceled: 'Отменена',
      paid: 'Оплачена',
   };

   transform(value: string, ...args: unknown[]): unknown {
      return this.statuses[value];
   }
}
