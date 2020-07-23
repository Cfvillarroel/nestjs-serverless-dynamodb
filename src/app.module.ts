import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/order/order.module';

@Module({
    imports: [OrderModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
