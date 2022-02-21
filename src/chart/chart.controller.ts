import { Controller, Get, Param, Query } from '@nestjs/common'
import { ChartService } from './chart.service'
import { GenreValues, RegionValues, SortValues, UrlValues } from './entities/chart.entities'

@Controller('chart')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get()
  main(
    @Query('sort') sort: SortValues,
    @Query('url') url: UrlValues,
    @Query('region') region: RegionValues,
    @Query('genre') genre: GenreValues
  ): string {
    return this.chartService.main(sort, url, region, genre)
  }
}
