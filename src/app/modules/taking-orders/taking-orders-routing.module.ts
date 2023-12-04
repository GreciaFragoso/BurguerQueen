import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakingOrdersComponent } from './pages/taking-orders/taking-orders.component';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [{ path: 'order', component: TakingOrdersComponent }]
                        // {path: 'order', loadChildren: () => import('./taking-orders.module').then(m => m.TakingOrdersModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakingOrdersRoutingModule { }
