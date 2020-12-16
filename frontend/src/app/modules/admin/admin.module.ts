import { ValidatorEffects } from './store/effects/validator.effects';
import { ValidatorService } from './services/validator.service';
import { MerchantEffects } from './store/effects/merchant.effects';
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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './store/effects/currency.effects';
import { CurrencyService } from './services/currency.service';
import { OrdersStatusDialogComponent } from './components/orders-status-dialog/orders-status-dialog.component';
import { OrderShowComponent } from './components/order-show/order-show.component';
import { OrdersSearchComponent } from './components/orders-search/orders-search.component';
import { ValidatorsShowComponent } from './components/validators-show/validators-show.component';
import { ValidatorsCreateComponent } from './components/validators-create/validators-create.component';
import { ValidatorTestComponent } from './components/validator-test/validator-test.component';
import { MerchantsShowComponent } from './components/merchants-show/merchants-show.component';
import { MerchantService } from './services/merchant.service';
import * as fromAdminModule from './store/index';
import { MerchantsCreateComponent } from './components/merchants-create/merchants-create.component';

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
      OrdersStatusDialogComponent,
      OrderShowComponent,
      OrdersSearchComponent,
      ValidatorsShowComponent,
      ValidatorsCreateComponent,
      ValidatorTestComponent,
      MerchantsShowComponent,
      MerchantsCreateComponent,
   ],
   imports: [
      AdminRoutingModule,
      SharedModule,
      StoreModule.forFeature(
         fromAdminModule.FEATURE_NAME,
         fromAdminModule.adminReducers
      ),
      EffectsModule.forFeature([
         CurrencyEffects,
         MerchantEffects,
         ValidatorEffects,
      ]),
   ],
   providers: [CurrencyService, MerchantService, ValidatorService],
})
export class AdminModule {}
