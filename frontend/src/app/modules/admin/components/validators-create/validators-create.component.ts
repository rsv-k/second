import { Validator } from './../../../../core/models/validator.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import * as ValidatorActions from '../../../../store/actions/validator.actions';

@Component({
   selector: 'app-validators-create',
   templateUrl: './validators-create.component.html',
   styleUrls: ['./validators-create.component.scss'],
})
export class ValidatorsCreateComponent implements OnInit {
   form: FormGroup;

   constructor(
      public dialogRef: MatDialogRef<ValidatorsCreateComponent>,
      @Inject(MAT_DIALOG_DATA) public data,
      private store: Store<fromRoot.AppState>
   ) {}

   ngOnInit(): void {
      this.form = new FormGroup({
         name: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
         ]),
         regex: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
         ]),
      });
   }

   onSubmit(): void {
      const validator: Validator = this.form.value;
      if (!this.form.valid) {
         return;
      }

      this.store.dispatch(
         ValidatorActions.addValidatorStart({ payload: validator })
      );
   }

   onNoClick(): void {
      this.dialogRef.close();
   }
}
