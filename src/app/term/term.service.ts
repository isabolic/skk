import { CommonService } from '@/app/common.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transformer } from '@/app/util/transformer';
import { TermDto } from './dto/term';
import { Term, TermDocument } from './schemas/term.schema';

@Injectable()
class TermService implements CommonService<TermDto> {
  constructor(
    @InjectModel(Term.name)
    private readonly termModel: Model<TermDocument>,
  ) {}

  async findAll(): Promise<TermDto[]> {
    const data = await this.termModel
      .find()
      .populate(Term.carterRefName)
      .exec();
    return Transformer.plainToClass(TermDto, (data as unknown) as JSON);
  }

  async findById(id: string): Promise<TermDto> {
    const data = await this.termModel.findById(id).exec();
    return Transformer.plainToClass(TermDto, (data as unknown) as JSON);
  }
}

export { TermService };
