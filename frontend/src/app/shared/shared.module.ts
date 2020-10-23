import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status.pipe';
import { CurrencyImgComponent } from './components/currency-img/currency-img.component';

@NgModule({
   declarations: [StatusPipe, CurrencyImgComponent],
   imports: [CommonModule, MaterialModule],
   exports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      StatusPipe,
      CurrencyImgComponent,
      FormsModule,
   ],
})
export class SharedModule {}
