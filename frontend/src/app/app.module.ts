import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/index';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      StoreModule.forRoot(fromApp.appReducers),
      CoreModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
