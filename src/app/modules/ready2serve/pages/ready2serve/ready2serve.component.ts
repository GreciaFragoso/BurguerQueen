import { Component } from '@angular/core';
import { ApiServiceService } from '@data/services/api-service.service';
import { Order } from '@data/interfaces/interfaces';

@Component({
  selector: 'app-ready2serve',
  templateUrl: './ready2serve.component.html',
  styleUrls: ['./ready2serve.component.scss']
})
export class Ready2serveComponent {
  currentOrders: Order[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(){
    this.orders();
  }

  orders(){
    this.apiService.getOrders().subscribe(response => {
      console.log(response);
      this.currentOrders = response;
    }, 
    (error) => {
      console.error(error);
    })
  }

  toUpperCase(status: string){
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  // getPreparationTime(order: Order){
  //   if(order.status === 'delivered'){
  //     let time = moment()
  //     .set('Hours', 0)
  //     .set('Minutes', moment(order.dateProcessed?).diff(moment(order.dataEntry), 'minutes'))
  //     .format('HH:mm:ss')
  //     return time;
  //   }
  // }

}
