import { Module } from '@nestjs/common'
import { ChartController } from './chart/chart.controller'
import { ChartModule } from './chart/chart.module'

@Module({
  imports: [ChartModule],
  controllers: [ChartController],
  providers: []
})
export class AppModule {}
