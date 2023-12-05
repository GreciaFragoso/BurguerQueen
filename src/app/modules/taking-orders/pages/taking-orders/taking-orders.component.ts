import { Component } from '@angular/core';

@Component({
  selector: 'app-taking-orders',
  templateUrl: './taking-orders.component.html',
  styleUrls: ['./taking-orders.component.scss']
})
export class TakingOrdersComponent {
  items = [] = ['Hamburguesa sencilla', 'Hamburguesa doble', 'Papas fritas', 'Aros de cebolla', 'Agua 500 ml', 'Agua 750 ml'];

}
