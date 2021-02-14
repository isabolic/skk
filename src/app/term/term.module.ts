import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Term, TermSchema } from './schemas/term.schema';
import { TermController } from './term.controller';
import { TermService } from './term.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Term.name, schema: TermSchema }]),
  ],
  controllers: [TermController],
  providers: [TermService],
})
class TermModule {
  constructor(private termService: TermService) {}
}

export { TermModule };
