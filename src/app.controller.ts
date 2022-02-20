import { Controller, Get } from '@nestjs/common'

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Melon API v2 ✅'
  }
}
