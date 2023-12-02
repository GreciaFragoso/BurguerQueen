import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenOrdersRoutingModule } from './kitchen-orders-routing.module';
import { SharedModule } from '@shared/shared.module';
import { KitchenOrdersComponent } from './pages/kitchen-orders/kitchen-orders.component';


@NgModule({
  declarations: [ KitchenOrdersComponent ],
  imports: [
    CommonModule,
    KitchenOrdersRoutingModule,
    SharedModule
  ]
})
export class KitchenOrdersModule { }
