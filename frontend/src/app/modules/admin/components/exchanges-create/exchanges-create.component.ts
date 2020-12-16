import { Merchant } from './../../../../core/models/merchant.model';
import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { Currency } from '@models/currency.model';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import * as fromAdminModule from '../../store/index';
import * as MerchantActions from '../../store/actions/merchants.actions';
import * as fromRoot from '../../../../store/index';

@Component({
   selector: 'app-exchanges-create',
   templateUrl: './exchanges-create.component.html',
   styleUrls: ['./exchanges-create.component.scss'],
})
export class ExchangesCreateComponent implements OnInit {
   form: FormGroup;
   currencies$: Observable<Currency[]>;
   merchants$: Observable<Merchant[]>;

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

   private merchant: Merchant;
   private selectedFields: string[] = [];
   private mode = 'create';
   givenCurrency: Currency;
   takenCurrency: Currency;

   constructor(private store: Store<fromAdminModule.AppState>) {}

   ngOnInit(): void {
      this.initForm();

      this.store.dispatch(CurrencyActions.currenciesLoadStart());
      this.currencies$ = this.store.select(fromAdminModule.getAllCurrencies);

      this.store.dispatch(MerchantActions.getMerchantsStart());
      this.merchants$ = this.store
         .select(fromAdminModule.getAllMerchant)
         .pipe(
            map((currencies) => [
               { name: 'Ручная обработка платежа', id: '0', link: '' },
               ...currencies,
            ])
         );

      this.form.get('merchant').setValue('Ручная обработка платежа');

      this.store
         .select(fromRoot.getExchange)
         .pipe(
            filter((exchange) => !!exchange),
            first()
         )
         .subscribe((exchange) => {
            this.mode = 'edit';
            this.setForm(exchange);
            this.setSlidersToTrue(exchange);
            this.selectedFields = exchange.fields;

            this.givenCurrency = exchange.givenCurrency;
            this.takenCurrency = exchange.takenCurrency;
            this.merchant = exchange.merchant;

            this.form
               .get('merchant')
               .setValue(this.merchant && this.merchant.name);

            this.shouldDisplayWmInterfaceOption();
         });
   }

   onSubmit(): void {
      const exchange: Exchange = {
         ...this.form.value,
         givenCurrency: this.givenCurrency.id,
         takenCurrency: this.takenCurrency.id,
         fields: this.selectedFields,
         merchant: this.merchant && this.merchant.id,
         enableWMInterface: this.form.value.enableWMInterface || false,
      };

      if (this.mode === 'create') {
         this.store.dispatch(
            ExchangeActions.addExchangeStart({ payload: exchange })
         );
      } else {
         this.store.dispatch(
            ExchangeActions.editExchangeStart({
               payload: exchange,
            })
         );
      }
   }

   onMerchantSelect(option: Merchant): void {
      if (option.id !== '0') {
         this.merchant = option;
      }

      this.form.get('merchant').setValue(option.name);
   }

   onCurrencySelect(option: Currency, property: string): void {
      if (this.mode === 'edit') {
         return;
      }

      this[property] = option;
      this.form.get(property).setValue(option.name);
      this.shouldDisplayWmInterfaceOption();
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
         merchant: new FormControl(''),
      });
   }

   private setForm(exchange: Exchange): void {
      this.form.patchValue({
         ...exchange,
         givenCurrency: exchange.givenCurrency.name,
         takenCurrency: exchange.takenCurrency.name,
         merchant: exchange,
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
