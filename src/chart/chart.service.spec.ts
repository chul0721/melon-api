import { Test, TestingModule } from '@nestjs/testing'
import { ChartService } from './chart.service'

describe('ChartService', () => {
  let service: ChartService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartService]
    }).compile()

    service = module.get<ChartService>(ChartService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
