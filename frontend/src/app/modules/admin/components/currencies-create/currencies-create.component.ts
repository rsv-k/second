import { Validator } from './../../../../core/models/validator.model';
import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromCurrency from '../../store/reducers/currency.reducer';
import * as ValidatorActions from '../../../../store/actions/validator.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

@Component({
   selector: 'app-currencies-create',
   templateUrl: './currencies-create.component.html',
   styleUrls: ['./currencies-create.component.scss'],
})
export class CurrenciesCreateComponent implements OnInit {
   form: FormGroup;
   file: File;
   validators$: Observable<Validator[]>;

   private mode = 'create';
   private currencyToEdit: Currency;
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
   constructor(
      private store: Store<fromCurrency.AppState>,
      private route: ActivatedRoute,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.initiForm();
      this.route.data.subscribe((data: { currency: Currency }) => {
         this.currencyToEdit = data.currency;
         if (this.currencyToEdit) {
            this.mode = 'edit';
         }

         this.setForm(data.currency);
      });

      this.store.dispatch(ValidatorActions.getValidatorsStart());
      this.validators$ = this.store.select('validator').pipe(
         pluck('validators'),
         filter((validators) => !!validators.length)
      );

      this.form.get('icon').disable();
   }

   onSubmit(): void {
      const currency: Currency = {
         ...this.form.value,
         icon: this.file,
      };

      if (this.mode === 'create') {
         this.store.dispatch(
            CurrencyActions.addCurrencyStart({ payload: currency })
         );
      } else if (this.mode === 'edit') {
         if (this.isNecessaryToUpdate(currency)) {
            this.store.dispatch(
               CurrencyActions.currencyUpdateStart({
                  payload: { id: this.currencyToEdit.id, currency },
               })
            );
         }
         this.router.navigate(['admin-dashboard/currencies-show']);
      }

      this.formGroupDirective.reset();
   }

   private isNecessaryToUpdate(currency: Currency): boolean {
      for (const key in currency) {
         if (this.currencyToEdit[key] !== currency[key]) {
            return true;
         }
      }

      return false;
   }

   onChangeFile(files: FileList): void {
      if (files.length === 0) {
         return;
      }
      this.file = files[0];
      this.form.get('icon').setValue(this.file.name);
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
