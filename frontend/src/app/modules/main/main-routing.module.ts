import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderResolver } from 'src/app/core/resolvers/order-resolver.service';
import { MainComponent } from './components/main/main.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionRulesComponent } from './components/section-rules/section-rules.component';
import { SectionTariffsComponent } from './components/section-tariffs/section-tariffs.component';
import { SectionTradeFirstComponent } from './components/section-trade-first/section-trade-first.component';
import { SectionTradeSecondComponent } from './components/section-trade-second/section-trade-second.component';
import { SectionTradeThirdComponent } from './components/section-trade-third/section-trade-third.component';
import { SectionTradeComponent } from './components/section-trade/section-trade.component';

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
            children: [
               {
                  path: '',
                  pathMatch: 'full',
                  component: SectionTradeFirstComponent,
               },
               {
                  path: ':id',
                  component: SectionTradeSecondComponent,
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
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MainRoutingModule {}
