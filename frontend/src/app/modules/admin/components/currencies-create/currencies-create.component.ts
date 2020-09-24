import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromApp from '../../../../store/index';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-currencies-create',
   templateUrl: './currencies-create.component.html',
   styleUrls: ['./currencies-create.component.scss'],
})
export class CurrenciesCreateComponent implements OnInit {
   form: FormGroup;
   file: File;

   private mode = 'create';
   private currencyToEdit: Currency;
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
   constructor(
      private store: Store<fromApp.AppState>,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      this.initiForm();
      this.route.data.subscribe((data: { currency: Currency }) => {
         this.currencyToEdit = data.currency;
         this.mode = 'edit';
         this.setForm(data.currency);
      });

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
         if (!this.isNecessaryToUpdate(currency)) {
            return alert('nothing to update');
         }

         this.store.dispatch(
            CurrencyActions.currencyUpdateStart({
               payload: { id: this.currencyToEdit.id, currency },
            })
         );
      }

      this.formGroupDirective.reset();
   }

   private isNecessaryToUpdate(currency): boolean {
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
      });
   }

   private setForm(currency: Currency): void {
      this.form.patchValue({
         ...currency,
      });
   }
}
