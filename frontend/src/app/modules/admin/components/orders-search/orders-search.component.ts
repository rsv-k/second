import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
   selector: 'app-orders-search',
   templateUrl: './orders-search.component.html',
   styleUrls: ['./orders-search.component.scss'],
})
export class OrdersSearchComponent implements OnInit {
   form: FormGroup;
   statuses = ['done', 'paid', 'pending', 'freezed', 'canceled'];
   constructor(public dialogRef: MatDialogRef<OrdersSearchComponent>) {}

   ngOnInit(): void {
      this.form = new FormGroup({
         status: new FormControl(''),
      });
   }

   onNoClick(): void {
      this.dialogRef.close();
   }
}
