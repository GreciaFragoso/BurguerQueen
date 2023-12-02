import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ready2serveComponent } from './pages/ready2serve/ready2serve.component';

const routes: Routes = [{ path: '/ready-to-serve', component: Ready2serveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ready2serveRoutingModule { }
