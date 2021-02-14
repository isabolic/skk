import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CarterDto } from './dto/carter';
import { CarterService } from './carter.service';
import { CommonController } from '@/app/common.controller';
import { JwtAuthGuard } from '@/app/auth/jwt.guard';

@Controller('carter')
class TicketController extends CommonController<CarterDto, CarterService> {
  constructor(protected readonly service: CarterService) {
    super(service);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/carter-term/:id?')
  async caterTerm(@Param('id') id: string): Promise<CarterDto[]> {
    return await this.service.findCarterTerm(id);
  }
}

export { TicketController };
