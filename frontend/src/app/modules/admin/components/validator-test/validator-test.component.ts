import { Validator } from './../../../../core/models/validator.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
   selector: 'app-validator-test',
   templateUrl: './validator-test.component.html',
   styleUrls: ['./validator-test.component.scss'],
})
export class ValidatorTestComponent implements OnInit {
   control: FormControl;

   constructor(
      public dialogRef: MatDialogRef<ValidatorTestComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { validator: Validator }
   ) {}

   ngOnInit(): void {
      this.control = new FormControl('', [
         Validators.pattern(this.data.validator.regex),
      ]);
   }
}
