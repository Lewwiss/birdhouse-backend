import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { HouseMiddleware } from './middleware/house.middleware';

@Module({
  imports: [],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(HouseMiddleware)
            .forRoutes(HouseController);
    }
}