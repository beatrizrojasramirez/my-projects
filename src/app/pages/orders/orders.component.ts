import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/common/classes/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[]=[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      response => {
        this.orders = <Order[]>response.body;
      }
    )
  }

}
