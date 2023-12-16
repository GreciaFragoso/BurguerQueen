import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FatherContainerComponent } from './components/father-container/father-container.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [ 
    FatherContainerComponent, ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FatherContainerComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
