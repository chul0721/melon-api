import { BadRequestException, Injectable } from '@nestjs/common'
import { ChartDTO } from './dto/chart.dto'
import { GenreValues, RegionValues, UrlValues } from './entities/chart.entities'

@Injectable()
export class ChartService {
  private data: ChartDTO = {
    url: '',
    region: '',
    genre: ''
  }

  main(url: UrlValues, region: RegionValues, genre: GenreValues): string {
    if (!url || !region || !genre) {
      throw new BadRequestException('Please specify parameters')
    } else {
      return (this.data = JSON.parse(`{"url": ${url}, "region": ${region}, "genre": ${genre}}`))
    }
  }
}
