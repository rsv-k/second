import {
   ChangeDetectionStrategy,
   Component,
   Inject,
   OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
   selector: 'app-orders-status-dialog',
   templateUrl: './orders-status-dialog.component.html',
   styleUrls: ['./orders-status-dialog.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersStatusDialogComponent implements OnInit {
   statuses = ['canceled', 'pending', 'paid', 'done', 'freezed'];

   constructor(
      public dialogRef: MatDialogRef<OrdersStatusDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string
   ) {}

   ngOnInit(): void {}

   onNoClick(): void {
      this.dialogRef.close();
   }
}
