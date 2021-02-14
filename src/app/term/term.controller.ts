import { CommonController } from '@/app/common.controller';
import { Controller } from '@nestjs/common';
import { TermDto } from './dto/term';
import { TermService } from './term.service';

@Controller('term')
class TermController extends CommonController<TermDto, TermService> {
  constructor(protected readonly service: TermService) {
    super(service);
  }
}

export { TermController };
