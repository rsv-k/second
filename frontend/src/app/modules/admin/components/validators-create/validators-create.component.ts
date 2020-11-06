import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
   selector: 'app-validators-create',
   templateUrl: './validators-create.component.html',
   styleUrls: ['./validators-create.component.scss'],
})
export class ValidatorsCreateComponent implements OnInit {
   constructor(
      public dialogRef: MatDialogRef<ValidatorsCreateComponent>,
      @Inject(MAT_DIALOG_DATA) public data
   ) {}

   ngOnInit(): void {}

   onNoClick(): void {
      this.dialogRef.close();
   }
}
