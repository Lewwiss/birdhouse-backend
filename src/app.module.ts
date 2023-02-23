import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseController } from './house/house.controller';
import { HouseService } from './house/house.service';
import { HouseModule } from './house/house.module';

@Module({
  imports: [HouseModule],
  controllers: [AppController, HouseController],
  providers: [AppService, HouseService],
})
export class AppModule {}
