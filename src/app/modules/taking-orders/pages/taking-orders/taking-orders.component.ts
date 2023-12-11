import { Component } from '@angular/core';
import { ApiServiceService } from '@data/services/api-service.service';

@Component({
  selector: 'app-taking-orders',
  templateUrl: './taking-orders.component.html',
  styleUrls: ['./taking-orders.component.scss']
})
export class TakingOrdersComponent {
  items: any;
  currentOrder: any = [];
  currentTotal: number = 0;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(){
    this.getMenuProducts();
  }

  getMenuProducts() {
    this.apiService.getMenu().subscribe((menu) => {
      console.log(menu)
      this.items = menu;
    })
  }
  
  addToOrder(item: any){
    this.currentOrder.push(item);
    console.log(this.currentOrder);
    this.currentTotal += item.price;
  }

  sendOrder(){
    this.currentOrder = [];
  }

  deleteOrderItem(item: any){
    this.currentOrder.splice(this.currentOrder.indexOf(item), 1);
    this.currentTotal -= item.price;
    console.log(this.currentOrder)
  }
}
