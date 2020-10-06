import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExchangeEffects } from './store/effects/exchange.effects';
import { OrderEffects } from './store/effects/order.effects';
import * as fromApp from './store/index';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      StoreModule.forRoot(fromApp.appReducers),
      EffectsModule.forRoot([ExchangeEffects, OrderEffects]),
      CoreModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
