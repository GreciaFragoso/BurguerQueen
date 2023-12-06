import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakingOrdersRoutingModule } from './taking-orders-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TakingOrdersComponent } from './pages/taking-orders/taking-orders.component';
<<<<<<< HEAD
import { MatExpansionModule } from '@angular/material/expansion'
=======
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 6324c99 (Fixed broken HEAD)


@NgModule({
  declarations: [ TakingOrdersComponent ],
  imports: [
    CommonModule,
    TakingOrdersRoutingModule,
    SharedModule,
<<<<<<< HEAD
    MatExpansionModule
=======
    MatExpansionModule,
    ReactiveFormsModule,
>>>>>>> 6324c99 (Fixed broken HEAD)
  ]
})
export class TakingOrdersModule { }
