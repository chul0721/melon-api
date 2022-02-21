import { IsOptional, IsString } from 'class-validator'

export class ChartDTO {
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
