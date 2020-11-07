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
   mode = 'Сохранить';
   form: FormGroup;

   constructor(
      public dialogRef: MatDialogRef<ValidatorsCreateComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { validator: Validator },
      private store: Store<fromRoot.AppState>
   ) {}

   ngOnInit(): void {
      if (this.data) {
         this.mode = 'Редактировать';
      }

      this.form = new FormGroup({
         name: new FormControl((this.data && this.data.validator.name) || '', [
            Validators.required,
            Validators.minLength(3),
         ]),
         regex: new FormControl(
            (this.data && this.data.validator.regex) || '',
            [Validators.required, Validators.minLength(3)]
         ),
      });
   }

   onSubmit(): void {
      const validator: Validator = this.form.value;
      if (!this.form.valid) {
         return;
      }

      if (this.mode === 'Сохранить') {
         this.store.dispatch(
            ValidatorActions.addValidatorStart({ payload: validator })
         );
      } else {
         this.store.dispatch(
            ValidatorActions.editValidatorStart({
               payload: {
                  id: this.data.validator.id,
                  validator: {
                     name: validator.name,
                     regex: validator.regex,
                     id: this.data.validator.id,
                  },
               },
            })
         );
      }
   }

   onNoClick(): void {
      this.dialogRef.close();
   }
}
