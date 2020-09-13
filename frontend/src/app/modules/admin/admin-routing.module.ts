import { CurrenciesShowComponent } from './components/currencies-show/currencies-show.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
      path: '',
      component: AdminComponent,
      children: [
         {
            path: '',
            component: CurrenciesShowComponent,
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
