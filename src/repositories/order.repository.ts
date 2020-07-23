import * as AWS from 'aws-sdk';
import { CreateOrderDto } from '../modules/order/dto/createOrder.dto';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export class OrderRepository {
    constructor() {}

    async createOrder(createOrderDto: CreateOrderDto) {
        const newOrder = {
            id: uuid(),
            title: createOrderDto.title,
            category: createOrderDto.category,
        };

        try {
            await new AWS.DynamoDB.DocumentClient()
                .put({
                    TableName: process.env.ORDERS_TABLE_NAME,
                    Item: newOrder,
                })
                .promise();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        return { ok: true, data: newOrder };
    }

    async getOrderById(id) {
        let order;
        try {
            const result = await new AWS.DynamoDB.DocumentClient()
                .get({
                    TableName: process.env.ORDERS_TABLE_NAME,
                    Key: { id },
                })
                .promise();

            order = result.Item;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        if (!order) {
            throw new NotFoundException(`Order with ID "${id}" not found`);
        }

        return { ok: true, data: order };
    }
}
