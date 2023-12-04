import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
// import { LoginComponent } from './modules/login/pages/login/login.component';
// import { TakingOrdersComponent } from './modules/taking-orders/pages/taking-orders/taking-orders.component';
// import { KitchenOrdersComponent } from './modules/kitchen-orders/pages/kitchen-orders/kitchen-orders.component';
// import { Ready2serveComponent } from './modules/ready2serve/pages/ready2serve/ready2serve.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'; // para lazyLoading
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({ // aquí no se declaran las vistas
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    HeaderComponent,
    // LoginComponent,
    // TakingOrdersComponent,
    // KitchenOrdersComponent,
    // Ready2serveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }, // para lazyLoading
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }