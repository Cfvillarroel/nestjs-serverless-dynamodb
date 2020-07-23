import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { OrderRepository } from '../../repositories/order.repository';

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository) {}

    async createOrder(createOrderDto: CreateOrderDto) {
        const createdOffer = await this.orderRepository.createOrder(createOrderDto);
        return createdOffer;
    }

    async getOrderById(id) {
        const Order = await this.orderRepository.getOrderById(id);
        return Order;
    }
}
