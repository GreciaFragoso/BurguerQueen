import { Component, ViewChild } from '@angular/core';
import { ProductInfo } from '@data/interfaces/interfaces';
import { ApiServiceService } from '@data/services/api-service.service';
import { NgModel } from '@angular/forms';
import { Order, OrderInfo } from '@data/interfaces/interfaces';
import { AuthService } from '@data/services/auth.service';

@Component({
  selector: 'app-taking-orders',
  templateUrl: './taking-orders.component.html',
  styleUrls: ['./taking-orders.component.scss']
})
export class TakingOrdersComponent {
  items: ProductInfo[] = [];
  currentOrder: ProductInfo[] = [];
  orderInfo: OrderInfo[] = [];
  currentTotal: number = 0;
  selectedFilter: string = 'complete-menu'
  client: string = '';
  id: number = 0;

  inputContent: string = '';

  constructor(private apiService: ApiServiceService, private authService: AuthService) {}

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
        console.log(menu);
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

  transformOrderFormat(){
    return this.currentOrder.reduce((acc, prod) => {
      const existentProduct = acc.find((p) => p.product.id === prod.id);
      if(existentProduct){
        existentProduct.qty++;
      } else {
        acc.push({ qty: 1, product: prod})
      }

      return acc;
    }, [] as OrderInfo[]);
  }

  sendOrder(){
    const currentDate = new Date();
    const formatedDate = currentDate.toISOString();

    this.apiService.getOrderId().subscribe((orderId: number) => {
      const newOrder: Order = {
        client: this.inputContent,
        dataEntry: formatedDate,
        id: this.id,
        products: this.transformOrderFormat(),
        status: 'Pending',
        userId: 2
      } 
  
      if(newOrder.client === ''){
        alert('Por favor, coloca el nombre del cliente');
        return;
      } else if (newOrder.products.length === 0) {
        alert('No has seleccionado ningún producto');
        return;
      }

      this.apiService.sendOrder(newOrder).subscribe(
        () => {
        console.log('La orden se envió exitosamente')
        this.currentOrder = [];
        this.currentTotal = 0;
      }, 
        (error) => {
        console.error('Error al realizar la solicitud', error.message);
      });
    }, error => {
      console.error('Error al obtener orderId', error.message)
    })
  }

  deleteOrderItem(item: ProductInfo){
    this.currentOrder.splice(this.currentOrder.indexOf(item), 1);
    this.currentTotal -= item.price;
    console.log(this.currentOrder)
  }
}
