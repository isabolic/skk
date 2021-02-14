import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Term, TermSchema } from '@/app/term/schemas/term.schema';
import { Carter, CarterSchema } from './schemas/carter.schema';
import { TicketController } from './carter.controller';
import { CarterService } from './carter.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carter.name, schema: CarterSchema }]),
    MongooseModule.forFeature([{ name: Term.name, schema: TermSchema }]),
  ],
  controllers: [TicketController],
  providers: [CarterService],
})
class CarterModule {
  constructor(private carterService: CarterService) {}
}

export { CarterModule };
