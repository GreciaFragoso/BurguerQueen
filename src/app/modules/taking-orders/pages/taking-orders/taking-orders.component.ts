import { Component, ViewChild } from '@angular/core';
import { ProductInfo } from '@data/interfaces/interfaces';
import { ApiServiceService } from '@data/services/api-service.service';
import { NgModel } from '@angular/forms';
import { Order } from '@data/interfaces/interfaces';

@Component({
  selector: 'app-taking-orders',
  templateUrl: './taking-orders.component.html',
  styleUrls: ['./taking-orders.component.scss']
})
export class TakingOrdersComponent {
  items: ProductInfo[] = [];
  currentOrder: ProductInfo[] = [];
  currentTotal: number = 0;
  selectedFilter: string = 'complete-menu'
  client: string = '';
  dataEntry: string = '';
  id: number = 0;
  products: Object[] = [];
  status: string = 'Pending'
  userId: number = 0;
  inputContent: string = '';

  constructor(private apiService: ApiServiceService) {}

  @ViewChild('nombreInput', { static: false }) nombreInput!: NgModel;

  ngOnInit(){
    this.chooseMenu();
  }

  chooseMenu(type?: string){
    this.getMenuProducts(type);
  }

  getMenuProducts(type?: string) {
    this.apiService.getMenu().subscribe((menu) => {
      if(type){
        this.items = menu.filter((item: {type: string }) => item.type === type);
        this.selectedFilter = type;
      } else {
        this.items = menu;
        this.selectedFilter = 'complete-menu';
      }
    })
  }
  
  addToOrder(item: ProductInfo){
    this.currentOrder.push(item);
    console.log(this.currentOrder);
    this.currentTotal += item.price;
  }

  sendOrder(){
    const newOrder: Order = {} as Order;
    newOrder.client = this.inputContent;
    newOrder.status = 'Pending'
    this.currentOrder = [];
    this.currentTotal = 0;
  }

  deleteOrderItem(item: ProductInfo){
    this.currentOrder.splice(this.currentOrder.indexOf(item), 1);
    this.currentTotal -= item.price;
    console.log(this.currentOrder)
  }
}
