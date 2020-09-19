import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../../store/actions/currency.actions';

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
   constructor(private store: Store) {}

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

      this.store.dispatch(new CurrencyActions.AddCurrency(this.form.value));

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
