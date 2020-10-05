import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';

@Component({
   selector: 'app-section-trade-second',
   templateUrl: './section-trade-second.component.html',
   styleUrls: ['./section-trade-second.component.scss'],
})
export class SectionTradeSecondComponent implements OnInit {
   form: FormGroup;
   exchange: Exchange;
   constructor(
      private store: Store<fromApp.AppState>,
      private route: ActivatedRoute,
      private router: Router
   ) {}

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
         .pipe(pluck('exchanges'), first())
         .subscribe((data) => {
            const id = this.route.snapshot.paramMap.get('id');
            const exchange = data.find((ex) => ex.id === id);

            if (!exchange) {
               return this.router.navigate(['/exchanges']);
            }

            this.exchange = exchange;
         });
   }

   onSubmit() {}
}
