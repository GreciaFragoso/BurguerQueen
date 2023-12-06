import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> 6324c99 (Fixed broken HEAD)

@Component({
  selector: 'app-taking-orders',
  templateUrl: './taking-orders.component.html',
  styleUrls: ['./taking-orders.component.scss']
})
export class TakingOrdersComponent {
  items =  
  ['Hamburguesa sencilla', 'Hamburguesa doble', 'Papas fritas', 'Aros de cebolla', 'Agua 500 ml', 'Agua 750 ml'];

<<<<<<< HEAD
  currentOrder: string[] = [];

  addToOrder(item: string){
    this.currentOrder.push(item);
=======
  currentOrder: any = { client: '', order: [] };

  getClient(client: string){
    this.currentOrder.client = client;
  }
  
  addToOrder(item: string){
    this.currentOrder.order.push(item);
>>>>>>> 6324c99 (Fixed broken HEAD)
    console.log(this.currentOrder);
  }

  sendOrder(){
<<<<<<< HEAD
    this.currentOrder = [];
=======
    this.currentOrder = { client: '', order: [] };
>>>>>>> 6324c99 (Fixed broken HEAD)
  }
}
