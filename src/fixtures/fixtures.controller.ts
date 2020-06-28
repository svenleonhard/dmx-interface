import { Controller, Get } from '@nestjs/common';

@Controller('fixtures')
export class FixturesController {
  @Get()
  findAll(): string {
    return 'Fixtures';
  }
}
