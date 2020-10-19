import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-section-trade-third',
   templateUrl: './section-trade-third.component.html',
   styleUrls: ['./section-trade-third.component.scss'],
})
export class SectionTradeThirdComponent implements OnInit {
   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.route.data.subscribe((data) => console.log(data));
   }
}
