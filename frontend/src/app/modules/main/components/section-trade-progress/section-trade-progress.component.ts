import { Progress } from './../../../../core/models/progress.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';

@Component({
   selector: 'app-section-trade-progress',
   templateUrl: './section-trade-progress.component.html',
   styleUrls: ['./section-trade-progress.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTradeProgressComponent implements OnInit {
   progress$: Observable<number>;
   levels: Progress[] = [
      {
         id: 1,
         isCompleted: false,
         isCurrent: true,
         text: 'Выберите направление обмена',
      },
      {
         id: 2,
         isCompleted: false,
         isCurrent: false,
         text: 'Платежная информация',
      },
      {
         id: 3,
         isCompleted: false,
         isCurrent: false,
         text: 'Подтверждение, оплата',
      },
   ];

   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.progress$ = this.store
         .select('progress')
         .pipe(pluck('currentProgress'));
   }
}
