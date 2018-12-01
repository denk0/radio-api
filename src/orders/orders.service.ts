import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
  private readonly orders: Order[] = [];

  getAll(): string {
    return 'List of all orders';
  }

  getOne(id: string): string {
    return `Info about specific order with id ${id}`;
  }

  create(order: Order) {
    this.orders.push(order);
  }
}
