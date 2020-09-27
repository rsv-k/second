import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
   declarations: [MainComponent],
   imports: [MainRoutingModule, SharedModule],
})
export class MainModule {}
