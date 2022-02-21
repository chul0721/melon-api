import { Controller, Get, Param } from '@nestjs/common'
import { ChartService } from './chart.service'
import { GenreValues, RegionValues, UrlValues } from './entities/chart.entities'

@Controller('chart')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get('/:url/:region/:genre')
  main(
    @Param('url') url: UrlValues,
    @Param('region') region: RegionValues,
    @Param('genre') genre: GenreValues
  ): string {
    return this.chartService.main(url, region, genre)
  }
}
