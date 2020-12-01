import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status.pipe';
import { CurrencyImgComponent } from './components/currency-img/currency-img.component';
import { GetMoneyInPipe } from './pipes/get-money-in.pipe';

@NgModule({
   declarations: [StatusPipe, CurrencyImgComponent, GetMoneyInPipe],
   imports: [CommonModule, MaterialModule],
   exports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      StatusPipe,
      CurrencyImgComponent,
      FormsModule,
      GetMoneyInPipe,
   ],
})
export class SharedModule {}
