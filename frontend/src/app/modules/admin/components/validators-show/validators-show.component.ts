import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ValidatorsCreateComponent } from '../validators-create/validators-create.component';

@Component({
   selector: 'app-validators-show',
   templateUrl: './validators-show.component.html',
   styleUrls: ['./validators-show.component.scss'],
})
export class ValidatorsShowComponent implements OnInit {
   constructor(public dialog: MatDialog) {}

   ngOnInit(): void {}

   openDialog(): void {
      const dialogRef = this.dialog.open(ValidatorsCreateComponent, {
         width: '250px',
      });

      dialogRef.afterClosed().subscribe((result) => {
         console.log('The dialog was closed');
      });
   }
}
