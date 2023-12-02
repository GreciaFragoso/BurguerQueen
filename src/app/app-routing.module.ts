import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// LazyLoading
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { LoginModule } from '@modules/login/login.module';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/login/login.module').then((m): typeof LoginModule => m.LoginModule),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
