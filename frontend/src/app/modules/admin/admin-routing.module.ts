import { OrdersShowComponent } from './components/orders-show/orders-show.component';
import { ExchangesShowComponent } from './components/exchanges-show/exchanges-show.component';
import { CurrenciesShowComponent } from './components/currencies-show/currencies-show.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangesCreateComponent } from './components/exchanges-create/exchanges-create.component';
import { CurrenciesCreateComponent } from './components/currencies-create/currencies-create.component';

const routes: Routes = [
   {
      path: '',
      component: AdminComponent,
      children: [
         {
            path: '',
            redirectTo: 'currencies-show',
            pathMatch: 'full',
         },
         {
            path: 'currencies-show',
            component: CurrenciesShowComponent,
         },
         {
            path: 'currencies-create',
            component: CurrenciesCreateComponent,
         },
         {
            path: 'exchanges-show',
            component: ExchangesShowComponent,
         },
         {
            path: 'exchanges-create',
            component: ExchangesCreateComponent,
         },
         {
            path: 'orders-show',
            component: OrdersShowComponent,
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
