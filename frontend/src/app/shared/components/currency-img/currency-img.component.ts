import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-currency-img',
   templateUrl: './currency-img.component.html',
   styleUrls: ['./currency-img.component.scss'],
})
export class CurrencyImgComponent {
   @Input() icon: string;
   @Input() alt: string;
}
