import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
   declarations: [StatusPipe],
   imports: [CommonModule, MaterialModule],
   exports: [CommonModule, MaterialModule, ReactiveFormsModule, StatusPipe],
})
export class SharedModule {}
