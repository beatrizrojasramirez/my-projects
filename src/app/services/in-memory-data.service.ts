import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from '../common/classes/order';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {orders};
  }

  // Overrides the genId method to ensure that a order always has an id.
  // If the orders array is empty,
  // the method below returns the initial number (11).
  // if the orders array is not empty, the method below returns the highest
  // order id + 1.
  genId(iOrders: Order[]): number {
    return iOrders.length > 0 ? Math.max(...iOrders.map(order => order.id)) + 1 : 11;
  }
}