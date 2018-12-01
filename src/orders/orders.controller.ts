import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAll(@Body() body): string {
    return this.ordersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): string {
    return this.ordersService.getOne(id);
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return 'This action adds a new cat';
  }
}
