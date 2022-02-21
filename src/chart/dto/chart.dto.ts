import { IsOptional, IsString } from 'class-validator'

export class ChartDTO {
  @IsString()
  readonly sort: string

  @IsOptional()
  @IsString()
  readonly url: string

  @IsOptional()
  @IsString()
  readonly region: string

  @IsOptional()
  @IsString()
  readonly genre: string
}
