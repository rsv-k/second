import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSideMenuComponent } from './components/admin-side-menu/admin-side-menu.component';
import { CurrenciesShowComponent } from './components/currencies-show/currencies-show.component';
import { ExchangesShowComponent } from './components/exchanges-show/exchanges-show.component';

@NgModule({
  declarations: [AdminComponent, AdminSideMenuComponent, CurrenciesShowComponent, ExchangesShowComponent],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
