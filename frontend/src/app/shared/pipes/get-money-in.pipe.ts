import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'getMoneyIn',
})
export class GetMoneyInPipe implements PipeTransform {
   private currencyNames = {
      EUR: 'евро',
      UAH: 'гривнах',
      USD: 'долларах',
      RUB: 'рублях',
   };

   transform(value: string): string {
      return this.currencyNames[value];
   }
}
