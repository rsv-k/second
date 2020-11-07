import { Validator } from './../../../../core/models/validator.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ValidatorsCreateComponent } from '../validators-create/validators-create.component';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import * as ValidatorActions from '../../../../store/actions/validator.actions';
import { pluck } from 'rxjs/operators';
import { ValidatorTestComponent } from '../validator-test/validator-test.component';

@Component({
   selector: 'app-validators-show',
   templateUrl: './validators-show.component.html',
   styleUrls: ['./validators-show.component.scss'],
})
export class ValidatorsShowComponent implements OnInit {
   validators$: Observable<Validator[]>;
   displayedColumns = ['name', 'pattern', 'delete'];
   constructor(
      public dialog: MatDialog,
      private store: Store<fromRoot.AppState>
   ) {}

   ngOnInit(): void {
      this.validators$ = this.store
         .select('validator')
         .pipe(pluck('validators'));

      this.store.dispatch(ValidatorActions.getValidatorsStart());
   }

   openDialog(): void {
      this.dialog.open(ValidatorsCreateComponent, {
         width: '50rem',
      });
   }

   openTestDialog(validator: Validator): void {
      this.dialog.open(ValidatorTestComponent, {
         width: '25rem',
         data: { validator },
      });
   }

   onDeleteValidator(id: string): void {
      this.store.dispatch(
         ValidatorActions.deleteValidatorStart({ payload: { id } })
      );
   }
}
