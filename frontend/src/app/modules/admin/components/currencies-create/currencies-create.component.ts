import { Validator } from './../../../../core/models/validator.model';
import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as ValidatorActions from '../../store/actions/validator.actions';
import { Observable } from 'rxjs';
import * as fromAdminModule from '../../store/index';
import { filter, first } from 'rxjs/operators';

@Component({
   selector: 'app-currencies-create',
   templateUrl: './currencies-create.component.html',
   styleUrls: ['./currencies-create.component.scss'],
})
export class CurrenciesCreateComponent implements OnInit {
   form: FormGroup;
   file: File;
   validators$: Observable<Validator[]>;

   private currencyToEdit: Currency;
   constructor(private store: Store<fromAdminModule.AppState>) {}

   ngOnInit(): void {
      this.initiForm();

      this.store
         .select(fromAdminModule.getCurrency)
         .pipe(
            filter((currency) => !!currency),
            first()
         )
         .subscribe((currency) => {
            this.currencyToEdit = currency;

            this.setForm(currency);
         });

      this.store.dispatch(ValidatorActions.getValidatorsStart());
      this.validators$ = this.store.select(fromAdminModule.getAllValidators);

      this.form.get('icon').disable();
   }

   onSubmit(): void {
      const currency: Currency = {
         ...this.form.value,
         validator: this.form.value.validator || null,
         icon: this.file,
      };

      if (!this.currencyToEdit) {
         this.store.dispatch(
            CurrencyActions.addCurrencyStart({ payload: currency })
         );
      } else {
         if (this.isNecessaryToUpdate(currency)) {
            this.store.dispatch(
               CurrencyActions.currencyUpdateStart({
                  payload: { id: this.currencyToEdit.id, currency },
               })
            );
         }
      }
   }

   onChangeFile(files: FileList): void {
      if (files.length === 0) {
         return;
      }
      this.file = files[0];
      this.form.get('icon').setValue(this.file.name);
   }

   private isNecessaryToUpdate(currency: Currency): boolean {
      for (const key in currency) {
         if (this.currencyToEdit[key] !== currency[key]) {
            return true;
         }
      }

      return false;
   }

   private initiForm(): void {
      this.form = new FormGroup({
         stringId: new FormControl(''),
         currencyCode: new FormControl(''),
         reserve: new FormControl(''),
         card: new FormControl(''),
         icon: new FormControl(''),
         name: new FormControl(''),
         validator: new FormControl(''),
      });
   }

   private setForm(currency: Currency): void {
      this.form.patchValue({
         ...currency,
      });
   }
}
