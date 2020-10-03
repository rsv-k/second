import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionTradeComponent } from './components/section-trade/section-trade.component';
import { SectionTradeProgressComponent } from './components/section-trade-progress/section-trade-progress.component';
import { SectionTradeFirstComponent } from './components/section-trade-first/section-trade-first.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';

@NgModule({
   declarations: [MainComponent, HeaderComponent, FooterComponent, NavComponent, SectionTradeComponent, SectionTradeProgressComponent, SectionTradeFirstComponent, SectionAboutComponent],
   imports: [MainRoutingModule, SharedModule],
})
export class MainModule {}
