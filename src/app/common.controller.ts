import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt.guard';
import { CommonService } from './common.service';

@Controller()
abstract class CommonController<T, S extends CommonService<T>> {
  constructor(protected readonly service: S) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id?')
  protected async find(@Param('id') id: string = null): Promise<T | T[]> {
    let data: T | T[];

    if (id) {
      data = await this.service.findById(id);
    } else {
      data = await this.service.findAll();
    }

    return data;
  }
}

export { CommonController };
