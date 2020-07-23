import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    category: string;
}
