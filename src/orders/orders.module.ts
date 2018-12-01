import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { LoggerMiddleware } from '../logger.middleware';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .with('ApplicationModule')
      .forRoutes(OrdersController);
  }
}
