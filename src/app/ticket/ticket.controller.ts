import { CommonController } from '@/app/common.controller';
import { UseGuards } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { JwtAuthGuard } from '@/app/auth/jwt.guard';
import { BuyTicketDto } from './dto/buy.ticket';
import { TicketDto } from './dto/ticket';
import { TicketService, TICKET_LEVEL } from './ticket.service';

@Controller('ticket')
class TicketController extends CommonController<TicketDto, TicketService> {
  constructor(protected readonly service: TicketService) {
    super(service);
  }

  @UseGuards(JwtAuthGuard)
  @Post('buy')
  async buy(@Body() buyTicketDto: BuyTicketDto) {
    await this.service.buyTicket(buyTicketDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('details')
  async findAllDetails(): Promise<TicketDto[]> {
    return await this.service.findAll(TICKET_LEVEL.ALL);
  }
}

export { TicketController };
