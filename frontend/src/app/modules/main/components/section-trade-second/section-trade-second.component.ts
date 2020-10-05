import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';

@Component({
   selector: 'app-section-trade-second',
   templateUrl: './section-trade-second.component.html',
   styleUrls: ['./section-trade-second.component.scss'],
})
export class SectionTradeSecondComponent implements OnInit {
   form: FormGroup;
   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.form = new FormGroup({
         givenCurrency: new FormControl(''),
         takenCurrency: new FormControl(''),
         givenCard: new FormControl(''),
         takenCard: new FormControl(''),
         phone: new FormControl(''),
         email: new FormControl(''),
      });

      this.store
         .select('exchange')
         .pipe(pluck('exchanges'))
         .subscribe((data) => {
            console.log(data);
         });
   }

   onSubmit() {}
}
