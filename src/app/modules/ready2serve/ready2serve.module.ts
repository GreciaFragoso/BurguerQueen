import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ready2serveRoutingModule } from './ready2serve-routing.module';
import { SharedModule } from '@shared/shared.module';
import { Ready2serveComponent } from './pages/ready2serve/ready2serve.component';


@NgModule({
  declarations: [ Ready2serveComponent ],
  imports: [
    CommonModule,
    Ready2serveRoutingModule,
    SharedModule
  ]
})
export class Ready2serveModule { }
