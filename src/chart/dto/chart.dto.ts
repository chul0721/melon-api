import { IsOptional, IsString } from 'class-validator'
import { GenreValues, RegionValues, UrlValues } from '../entities/chart.entities'

export class ChartDTO {
  @IsOptional()
  @IsString()
  readonly url: UrlValues

  @IsOptional()
  @IsString()
  readonly region: RegionValues

  @IsOptional()
  @IsString()
  readonly genre: GenreValues
}
