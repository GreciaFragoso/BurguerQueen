import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakingOrdersComponent } from './pages/taking-orders/taking-orders.component';

const routes: Routes = [{ path: '/order', component: TakingOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakingOrdersRoutingModule { }
