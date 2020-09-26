import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSideMenuComponent } from './components/admin-side-menu/admin-side-menu.component';
import { SharedModule } from './../../shared/shared.module';
import { CurrenciesShowComponent } from './components/currencies-show/currencies-show.component';
import { ExchangesShowComponent } from './components/exchanges-show/exchanges-show.component';
import { OrdersShowComponent } from './components/orders-show/orders-show.component';
import { AdminPageHeaderComponent } from './components/admin-page-header/admin-page-header.component';
import { CurrenciesCreateComponent } from './components/currencies-create/currencies-create.component';
import { ExchangesCreateComponent } from './components/exchanges-create/exchanges-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromCurrency from './store/reducers/currency.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './store/effects/currency.effects';
import { CurrencyService } from './services/currency.service';

@NgModule({
   declarations: [
      AdminComponent,
      AdminSideMenuComponent,
      CurrenciesShowComponent,
      ExchangesShowComponent,
      OrdersShowComponent,
      AdminPageHeaderComponent,
      CurrenciesCreateComponent,
      ExchangesCreateComponent,
   ],
   imports: [
      AdminRoutingModule,
      SharedModule,
      ReactiveFormsModule,
      StoreModule.forFeature(fromCurrency.FEATURE_NAME, fromCurrency.reducer),
      EffectsModule.forFeature([CurrencyEffects]),
   ],
   providers: [CurrencyService],
})
export class AdminModule {}
