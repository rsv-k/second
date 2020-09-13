import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
