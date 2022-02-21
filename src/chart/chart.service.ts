import { BadRequestException, Injectable } from '@nestjs/common'
import { GenreValues, RegionValues, SortValues, UrlValues } from './entities/chart.entities'

@Injectable()
export class ChartService {
  private readonly data = {}

  main(sort: SortValues, url: UrlValues, region: RegionValues, genre: GenreValues): string {
    throw new BadRequestException('Please specify path')
  }
}
