import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenOrdersComponent } from './pages/kitchen-orders/kitchen-orders.component';

const routes: Routes = [{ path: '/kitchen', component: KitchenOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenOrdersRoutingModule { }
