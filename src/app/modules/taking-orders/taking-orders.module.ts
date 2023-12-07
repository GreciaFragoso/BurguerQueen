import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakingOrdersRoutingModule } from './taking-orders-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TakingOrdersComponent } from './pages/taking-orders/taking-orders.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ TakingOrdersComponent ],
  imports: [
    CommonModule,
    TakingOrdersRoutingModule,
    SharedModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ]
})
export class TakingOrdersModule { }
