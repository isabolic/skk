import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@/app/user/schemas/user.schema';
import { Term, TermSchema } from '@/app/term/schemas/term.schema';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Term.name, schema: TermSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
class TicketModule {
  constructor(private ticketService: TicketService) {}
}

export { TicketModule };
