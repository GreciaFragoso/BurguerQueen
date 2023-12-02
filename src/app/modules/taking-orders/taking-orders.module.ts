import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakingOrdersRoutingModule } from './taking-orders-routing.module';
import { SharedModule } from '@shared/shared.module';
import { KitchenOrdersComponent } from '@modules/kitchen-orders/pages/kitchen-orders/kitchen-orders.component';


@NgModule({
  declarations: [ KitchenOrdersComponent ],
  imports: [
    CommonModule,
    TakingOrdersRoutingModule,
    SharedModule
  ]
})
export class TakingOrdersModule { }
