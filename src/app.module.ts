import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ChartModule } from './chart/chart.module'

@Module({
  imports: [ChartModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
