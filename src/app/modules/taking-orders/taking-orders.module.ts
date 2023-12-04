import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakingOrdersRoutingModule } from './taking-orders-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TakingOrdersComponent } from './pages/taking-orders/taking-orders.component';


@NgModule({
  declarations: [ TakingOrdersComponent ],
  imports: [
    CommonModule,
    TakingOrdersRoutingModule,
    SharedModule
  ]
})
export class TakingOrdersModule { }
