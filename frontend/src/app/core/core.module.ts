import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [],
   imports: [SharedModule, HttpClientModule],
})
export class CoreModule {}
