import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSideMenuComponent } from './components/admin-side-menu/admin-side-menu.component';

@NgModule({
  declarations: [AdminComponent, AdminSideMenuComponent],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
