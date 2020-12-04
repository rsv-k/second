import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { Currency } from 'src/app/core/models/currency.model';
import * as fromCurrency from '../../store/reducers/currency.reducer';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Router } from '@angular/router';
import * as fromAdminModule from '../../store/index';

@Component({
   selector: 'app-exchanges-create',
   templateUrl: './exchanges-create.component.html',
   styleUrls: ['./exchanges-create.component.scss'],
})
export class ExchangesCreateComponent implements OnInit {
   form: FormGroup;
   currencies$: Observable<Currency[]>;

   givenCurrency: Currency;
   takenCurrency: Currency;

   displayWMInterfaceOption = false;

   fieldNames = [
      {
         text: 'Реквизиты отдаваемой валюты',
         controlName: 'givenCurrencyCard',
         isSelected: false,
      },
      {
         text: 'Реквизиты получаемой валюты',
         controlName: 'takenCurrencyCard',
         isSelected: false,
      },
      {
         text: 'Электронная почта',
         controlName: 'email',
         isSelected: false,
      },
      {
         text: 'Имя',
         controlName: 'name',
         isSelected: false,
      },
      {
         text: 'Фамилия',
         controlName: 'surname',
         isSelected: false,
      },
      {
         text: 'Номер телефона',
         controlName: 'phone',
         isSelected: false,
      },
   ];

   private selectedFields: string[] = [];
   private mode = 'create';
   private exchangeToEdit: Exchange = null;
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

   constructor(
      private store: Store<fromAdminModule.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.initForm();
      this.store.dispatch(CurrencyActions.currenciesLoadStart());
      this.currencies$ = this.store.pipe(
         select(fromCurrency.selectAdminCurrencies)
      );

      this.store
         .select('exchange')
         .pipe(
            first(),
            filter((data) => !!data.exchange)
         )
         .subscribe((data) => {
            this.exchangeToEdit = data.exchange;

            this.mode = 'edit';
            this.setForm(this.exchangeToEdit);
            this.setSlidersToTrue(this.exchangeToEdit);
            this.selectedFields = data.exchange.fields;

            this.givenCurrency = data.exchange.givenCurrency;
            this.takenCurrency = data.exchange.takenCurrency;

            this.shouldDisplayWmInterfaceOption();
         });
   }

   onSubmit(): void {
      const exchange: Exchange = {
         ...this.form.value,
         givenCurrencyId: this.givenCurrency.id,
         takenCurrencyId: this.takenCurrency.id,
         fields: this.selectedFields,
      };

      if (this.mode === 'create') {
         this.store.dispatch(
            ExchangeActions.addExchangeStart({ payload: exchange })
         );
      } else if (this.mode === 'edit') {
         delete exchange.givenCurrencyId;
         delete exchange.takenCurrencyId;
         delete exchange.givenCurrency;
         delete exchange.takenCurrency;

         this.store.dispatch(
            ExchangeActions.editExchangeStart({
               payload: { id: this.exchangeToEdit.id, exchange },
            })
         );

         this.router.navigate(['admin-dashboard/exchanges-show']);
      }

      this.formGroupDirective.reset();
   }

   onGivenCurrencySelect(option: Currency): void {
      if (this.mode === 'edit') {
         return;
      }

      this.givenCurrency = option;
      this.form.get('givenCurrency').setValue(option.name);

      this.shouldDisplayWmInterfaceOption();

      this.currencies$ = this.store.pipe(
         select(fromCurrency.selectAdminCurrencies),
         map((currency) => currency.filter((c) => c.id !== option.id))
      );
   }

   onTakenCurrencySelect(option: Currency): void {
      if (this.mode === 'edit') {
         return;
      }

      this.takenCurrency = option;
      this.form.get('takenCurrency').setValue(option.name);

      this.shouldDisplayWmInterfaceOption();

      this.currencies$ = this.store.pipe(
         select(fromCurrency.selectAdminCurrencies),
         map((currency) => currency.filter((c) => c.id !== option.id))
      );
   }

   onSlideChange(controlName: string): void {
      const field = this.fieldNames.find((f) => f.controlName === controlName);
      if (!field) {
         return;
      }

      field.isSelected = !field.isSelected;
      if (field.isSelected) {
         this.selectedFields = [...this.selectedFields, controlName];
      } else {
         this.selectedFields = this.selectedFields.filter(
            (f) => f !== controlName
         );
      }
   }

   private initForm(): void {
      this.form = new FormGroup({
         givenCurrency: new FormControl(''),
         takenCurrency: new FormControl(''),
         givenCurrencyCourse: new FormControl(''),
         takenCurrencyCourse: new FormControl(''),
         maxGivenCurrency: new FormControl(''),
         maxTakenCurrency: new FormControl(''),
         minGivenCurrency: new FormControl(''),
         minTakenCurrency: new FormControl(''),
         comment: new FormControl(''),
         enableWMInterface: new FormControl(''),
      });
   }

   private setForm(exchange: Exchange): void {
      this.form.patchValue({
         ...exchange,
         givenCurrency: exchange.givenCurrency.name,
         takenCurrency: exchange.takenCurrency.name,
      });

      this.form.get('givenCurrency').disable();
      this.form.get('takenCurrency').disable();
   }

   private setSlidersToTrue(exchange: Exchange): void {
      const controlNames = {};

      for (const c of exchange.fields) {
         controlNames[c] = true;
      }

      for (const f of this.fieldNames) {
         if (controlNames[f.controlName]) {
            f.isSelected = true;
         }
      }
   }

   private shouldDisplayWmInterfaceOption(): void {
      this.displayWMInterfaceOption =
         this.givenCurrency.name.includes('Webmoney') ||
         this.takenCurrency.name.includes('Webmoney');
   }
}
