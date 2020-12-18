import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-section-trade',
   templateUrl: './section-trade.component.html',
   styleUrls: ['./section-trade.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTradeComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
