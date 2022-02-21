import { BadRequestException, Injectable } from '@nestjs/common'
import { ChartDTO } from './dto/chart.dto'
import { GenreValues, RegionValues, UrlValues } from './entities/chart.entities'

@Injectable()
export class ChartService {
  private data = {}

  main(url: UrlValues, region: RegionValues, genre: GenreValues): ChartDTO {
    if (!url || !region || !genre) {
      throw new BadRequestException('Please specify parameters')
    } else {
      return (this.data = {
        url: url,
        region: region,
        genre: genre
      })
    }
  }
}
