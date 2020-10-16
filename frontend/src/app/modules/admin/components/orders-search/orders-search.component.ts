import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
   selector: 'app-orders-search',
   templateUrl: './orders-search.component.html',
   styleUrls: ['./orders-search.component.scss'],
})
export class OrdersSearchComponent implements OnInit {
   constructor(public dialogRef: MatDialogRef<OrdersSearchComponent>) {}

   ngOnInit(): void {}

   onNoClick(): void {
      this.dialogRef.close();
   }
}
