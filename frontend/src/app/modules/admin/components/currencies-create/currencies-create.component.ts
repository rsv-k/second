import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
   selector: 'app-currencies-create',
   templateUrl: './currencies-create.component.html',
   styleUrls: ['./currencies-create.component.scss'],
})
export class CurrenciesCreateComponent implements OnInit {
   form: FormGroup;

   constructor() {}

   ngOnInit(): void {
      this.form = new FormGroup({
         stringId: new FormControl(''),
         currencyCode: new FormControl(''),
         reserve: new FormControl(''),
         card: new FormControl(''),
         icon: new FormControl(''),
         name: new FormControl(''),
      });
   }

   onSubmit(): void {
      console.log(this.form.value);
   }
}
