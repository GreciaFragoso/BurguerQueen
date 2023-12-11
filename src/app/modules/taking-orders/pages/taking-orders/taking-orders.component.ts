import { Component } from '@angular/core';
import { ApiServiceService } from '@data/services/api-service.service';

@Component({
  selector: 'app-taking-orders',
  templateUrl: './taking-orders.component.html',
  styleUrls: ['./taking-orders.component.scss']
})
export class TakingOrdersComponent {
  items =  
  ['Hamburguesa sencilla', 'Hamburguesa doble', 'Papas fritas', 'Aros de cebolla', 'Agua 500 ml', 'Agua 750 ml'];

  currentOrder: string[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(){
    this.apiService.getMenu().subscribe(data => {
      console.log(data);
    })
  }

  addToOrder(item: string){
    this.currentOrder.push(item);
    console.log(this.currentOrder);
  }

  sendOrder(){
    this.currentOrder = [];
  }

  deleteOrderItem(item: string){
    this.currentOrder.splice(this.currentOrder.indexOf(item), 1);
  }
}
