import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from '../../repositories/order.repository';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [OrderService, OrderRepository],
})
export class OrderModule {}
