import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    category: string;
}
