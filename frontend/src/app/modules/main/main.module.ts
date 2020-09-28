import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
   declarations: [MainComponent, HeaderComponent, FooterComponent],
   imports: [MainRoutingModule, SharedModule],
})
export class MainModule {}
