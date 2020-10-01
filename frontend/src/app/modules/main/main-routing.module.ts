import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SectionTradeFirstComponent } from './components/section-trade-first/section-trade-first.component';
import { SectionTradeComponent } from './components/section-trade/section-trade.component';

const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         {
            path: '',
            component: SectionTradeComponent,
            children: [
               {
                  path: '',
                  component: SectionTradeFirstComponent,
               },
            ],
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MainRoutingModule {}
