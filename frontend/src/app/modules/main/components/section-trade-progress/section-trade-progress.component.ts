import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';

@Component({
   selector: 'app-section-trade-progress',
   templateUrl: './section-trade-progress.component.html',
   styleUrls: ['./section-trade-progress.component.scss'],
})
export class SectionTradeProgressComponent implements OnInit {
   progress$: Observable<number>;

   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.progress$ = this.store
         .select('progress')
         .pipe(pluck('currentProgress'));
   }
}
