import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionRulesComponent } from './components/section-rules/section-rules.component';
import { SectionTariffsComponent } from './components/section-tariffs/section-tariffs.component';
import { SectionTradeFirstComponent } from './components/section-trade-first/section-trade-first.component';
import { SectionTradeSecondComponent } from './components/section-trade-second/section-trade-second.component';
import { SectionTradeThirdComponent } from './components/section-trade-third/section-trade-third.component';
import { SectionTradeComponent } from './components/section-trade/section-trade.component';
import { MoneybackPolicyComponent } from './components/moneyback-policy/moneyback-policy.component';
import { ExchangeResolver } from '@core/resolvers/exchange-resolver.service';
import { OrderResolver } from '@core/resolvers/order-resolver.service';

const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         {
            path: '',
            pathMatch: 'full',
            redirectTo: 'exchanges',
         },
         {
            path: 'exchanges',
            component: SectionTradeComponent,
            resolve: {
               exchanges: ExchangeResolver,
            },
            children: [
               {
                  path: '',
                  pathMatch: 'full',
                  component: SectionTradeFirstComponent,
               },
               {
                  path: ':id',
                  component: SectionTradeSecondComponent,
                  resolve: {
                     exchange: ExchangeResolver,
                  },
               },
               {
                  path: 'transaction/:id',
                  component: SectionTradeThirdComponent,
                  resolve: {
                     order: OrderResolver,
                  },
               },
            ],
         },
         {
            path: 'about',
            component: SectionAboutComponent,
         },
         {
            path: 'terms-of-use',
            component: SectionRulesComponent,
         },
         {
            path: 'tariffs',
            component: SectionTariffsComponent,
            resolve: {
               exchanges: ExchangeResolver,
            },
         },
         {
            path: 'moneybackPolicy',
            component: MoneybackPolicyComponent,
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MainRoutingModule {}
