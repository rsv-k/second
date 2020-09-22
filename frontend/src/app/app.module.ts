import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/index';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './modules/admin/store/effects/currency.effects';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      StoreModule.forRoot(fromApp.appReducers),
      EffectsModule.forRoot([CurrencyEffects]),
      CoreModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
