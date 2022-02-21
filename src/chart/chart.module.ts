import { Module } from '@nestjs/common'
import { ChartController } from './chart.controller'
import { ChartService } from './chart.service'

@Module({
  controllers: [ChartController],
  providers: [ChartService]
})
export class ChartModule {}
