import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromApp from '../../../../store/index';

@Component({
   selector: 'app-currencies-create',
   templateUrl: './currencies-create.component.html',
   styleUrls: ['./currencies-create.component.scss'],
})
export class CurrenciesCreateComponent implements OnInit {
   form: FormGroup;
   file: File;

   private icon: ArrayBuffer;
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.form = new FormGroup({
         stringId: new FormControl(''),
         currencyCode: new FormControl(''),
         reserve: new FormControl(''),
         card: new FormControl(''),
         icon: new FormControl(''),
         name: new FormControl(''),
      });

      this.form.get('icon').disable();
   }

   onSubmit(): void {
      const formData = new FormData();
      formData.append('image', this.file);

      const currency: Currency = {
         ...this.form.value,
         icon:
            'https://images.unsplash.com/photo-1600195076446-435ebd85d816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      };
      this.store.dispatch(new CurrencyActions.AddCurrency(currency));

      this.formGroupDirective.reset();
   }

   onChangeFile(files: FileList): void {
      if (files.length === 0) {
         return;
      }
      this.file = files[0];
      this.form.get('icon').setValue(this.file.name);
   }
}
