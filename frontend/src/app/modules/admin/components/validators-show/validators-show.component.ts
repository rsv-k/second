import { Validator } from './../../../../core/models/validator.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ValidatorsCreateComponent } from '../validators-create/validators-create.component';
import { Store } from '@ngrx/store';
import * as fromAdminModule from '../../store/index';
import * as ValidatorActions from '../../store/actions/validator.actions';
import { ValidatorTestComponent } from '../validator-test/validator-test.component';

@Component({
   selector: 'app-validators-show',
   templateUrl: './validators-show.component.html',
   styleUrls: ['./validators-show.component.scss'],
})
export class ValidatorsShowComponent implements OnInit {
   validators$: Observable<Validator[]>;
   displayedColumns = ['name', 'pattern', 'edit', 'delete'];
   constructor(
      public dialog: MatDialog,
      private store: Store<fromAdminModule.AppState>
   ) {}

   ngOnInit(): void {
      this.validators$ = this.store.select(fromAdminModule.getAllValidators);
      this.store.dispatch(ValidatorActions.getValidatorsStart());
   }

   openDialog(): void {
      this.dialog.open(ValidatorsCreateComponent, {
         width: '50rem',
      });
   }

   onEditDialog(validator: Validator): void {
      this.dialog.open(ValidatorsCreateComponent, {
         width: '50rem',
         data: { validator },
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
