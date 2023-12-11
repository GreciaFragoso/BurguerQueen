import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { authGuard } from '@core/auth.guard';
// LazyLoading

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    // home
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule)
  },
  { path: 'home', 
    component: SkeletonComponent,
    canActivate: [ authGuard ],
    children: [
      { path: 'order',
        loadChildren: () => import('@modules/taking-orders/taking-orders.module').then((m) => m.TakingOrdersModule)},
      {
        path: 'kitchen',
        loadChildren: () => import('@modules/kitchen-orders/kitchen-orders.module').then((m) => m.KitchenOrdersModule)
      },
      {
        path: 'ready-to-serve',
       loadChildren: () => import('./modules/ready2serve/ready2serve.module').then((m) => m.Ready2serveModule)
      }
    ] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // objeto useHash añadido para LazyLoading
  exports: [RouterModule]
})
export class AppRoutingModule { }
