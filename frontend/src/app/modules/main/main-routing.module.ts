import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionRulesComponent } from './components/section-rules/section-rules.component';
import { SectionTradeFirstComponent } from './components/section-trade-first/section-trade-first.component';
import { SectionTradeSecondComponent } from './components/section-trade-second/section-trade-second.component';
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
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MainRoutingModule {}
